#!/usr/bin/env python3
"""Archive one finished month of Umami analytics into the repo.

Umami Cloud's Hobby plan keeps only the last 6 months of data, so anything
older silently disappears from the dashboard. This job snapshots each
completed month into ANALYTICS_DIR/YYYY-MM.json, where git keeps it forever.
The slices are additive - lifetime totals are the sum of the files - so the
retention window only ever limits the dashboard, not the record.

Stored per month: the summary stats, plus per-path, per-referrer and custom
event breakdowns. Responses are saved as returned rather than reshaped, so a
change to Umami's response schema cannot silently corrupt the archive.

Only the standard library is used, so the workflow needs no pip install.

Environment:
  UMAMI_API_KEY      API key (required; Umami -> Settings -> API keys)
  UMAMI_WEBSITE_ID   website UUID (required)
  UMAMI_API_BASE     API root (default: https://api.umami.is/v1)
  ANALYTICS_DIR      output directory (default: analytics)
  SNAPSHOT_MONTH     YYYY-MM to archive (default: last complete month)
"""

import datetime
import json
import os
import pathlib
import sys
import urllib.error
import urllib.parse
import urllib.request

TIMEOUT = 60

# Metrics to archive, as (filename key, Umami `type` value). Countries and
# devices are deliberately omitted - they are not what this site is measured on.
METRIC_TYPES = [
    ("paths", "path"),
    ("referrers", "referrer"),
    ("events", "event"),
]


def fail(message):
    print(f"::error::{message}")
    sys.exit(1)


def set_output(name, value):
    path = os.environ.get("GITHUB_OUTPUT")
    if path:
        with open(path, "a", encoding="utf-8") as handle:
            handle.write(f"{name}={value}\n")
    print(f"{name}={value}")


def month_bounds(month):
    """Return (start_ms, end_ms) spanning `month` (a YYYY-MM string) in UTC.

    The end is the last millisecond of the month, so consecutive months never
    double-count a page view on a boundary.
    """
    try:
        year, mon = (int(part) for part in month.split("-"))
        start = datetime.datetime(year, mon, 1, tzinfo=datetime.timezone.utc)
    except (ValueError, TypeError):
        fail(f"SNAPSHOT_MONTH must look like 2026-08, got {month!r}.")
    next_month = (
        datetime.datetime(year + 1, 1, 1, tzinfo=datetime.timezone.utc)
        if mon == 12
        else datetime.datetime(year, mon + 1, 1, tzinfo=datetime.timezone.utc)
    )
    return int(start.timestamp() * 1000), int(next_month.timestamp() * 1000) - 1


def last_complete_month(today):
    """The month before `today`'s - the most recent one that is fully over."""
    first_of_this = today.replace(day=1)
    last_of_previous = first_of_this - datetime.timedelta(days=1)
    return f"{last_of_previous.year:04d}-{last_of_previous.month:02d}"


def get(url, api_key):
    request = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Accept": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            return json.loads(response.read())
    except urllib.error.HTTPError as exc:
        if exc.code in (401, 403):
            fail(
                f"HTTP {exc.code} from Umami - the API key is missing, wrong, "
                "or lacks access to this website."
            )
        fail(f"HTTP {exc.code} from Umami: {exc.reason} ({url})")
    except urllib.error.URLError as exc:
        fail(f"Could not reach Umami: {exc.reason}")
    except json.JSONDecodeError:
        fail(f"Umami returned a non-JSON response for {url}.")


def main():
    api_key = os.environ.get("UMAMI_API_KEY", "").strip()
    website_id = os.environ.get("UMAMI_WEBSITE_ID", "").strip()
    if not api_key:
        # Never configured is not a failure. A red X every month for a job
        # that was simply not switched on is noise, so warn and stop. A key
        # that exists but is rejected still fails loudly - see get().
        print(
            "::warning::UMAMI_API_KEY is not set, so there is nothing to "
            "archive yet. Add it as a repository secret to switch this on."
        )
        set_output("changed", "false")
        return
    if not website_id:
        fail("UMAMI_WEBSITE_ID is empty.")

    api_base = os.environ.get(
        "UMAMI_API_BASE", "https://api.umami.is/v1"
    ).rstrip("/")
    out_dir = pathlib.Path(os.environ.get("ANALYTICS_DIR", "analytics"))

    month = os.environ.get("SNAPSHOT_MONTH", "").strip() or last_complete_month(
        datetime.datetime.now(datetime.timezone.utc).date()
    )
    start_ms, end_ms = month_bounds(month)
    window = {"startAt": start_ms, "endAt": end_ms}
    site = f"{api_base}/websites/{website_id}"

    print(f"Archiving {month} ({start_ms}..{end_ms})")

    snapshot = {
        "_comment": (
            "Written by bin/snapshot_analytics.py - do not edit by hand. One "
            "completed month of Umami analytics, kept because the hosted plan "
            "only retains 6 months. Monthly files are additive."
        ),
        "month": month,
        "generated": datetime.datetime.now(datetime.timezone.utc)
        .replace(microsecond=0)
        .isoformat()
        .replace("+00:00", "Z"),
        "stats": get(f"{site}/stats?{urllib.parse.urlencode(window)}", api_key),
    }

    for key, metric_type in METRIC_TYPES:
        query = urllib.parse.urlencode({**window, "type": metric_type, "limit": 500})
        snapshot[key] = get(f"{site}/metrics?{query}", api_key)
        print(f"  {key}: {len(snapshot[key])} rows")

    body = json.dumps(snapshot, indent=2, sort_keys=True) + "\n"
    out_path = out_dir / f"{month}.json"

    # Ignore `generated` when deciding whether anything changed, so re-running
    # a month that has not moved does not churn the git history.
    if out_path.exists():
        old = json.loads(out_path.read_text(encoding="utf-8"))
        new = json.loads(body)
        old.pop("generated", None)
        new.pop("generated", None)
        if old == new:
            print("Unchanged - nothing to commit.")
            set_output("changed", "false")
            return

    out_dir.mkdir(parents=True, exist_ok=True)
    out_path.write_text(body, encoding="utf-8")
    print(f"Wrote {out_path}")
    set_output("changed", "true")


if __name__ == "__main__":
    main()
