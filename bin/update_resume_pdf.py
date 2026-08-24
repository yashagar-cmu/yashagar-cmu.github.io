#!/usr/bin/env python3
"""Export a Google Doc to PDF, but only when the doc has actually changed.

Google Drive renders the PDF server-side (the same output as File > Download >
PDF in the Docs UI), so there is no local docx -> PDF conversion step and no
fidelity loss.

Change detection uses the Drive `version` field, a monotonically increasing
counter Drive bumps on every revision. The last seen value is committed to the
repo, so a scheduled run on an unedited doc costs one metadata request and
exits without downloading or committing anything.

Environment:
  GDOC_SERVICE_ACCOUNT_KEY  service account JSON key (the whole file contents)
  GDOC_ID                   the document ID to export
  RESUME_PDF_PATH           output path (default: assets/pdf/resume.pdf)
  VERSION_FILE              state file (default: .github/resume-version.json)
  FORCE                     set to "true" to export regardless of version
"""

import json
import os
import pathlib
import sys

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

DRIVE_FILES = "https://www.googleapis.com/drive/v3/files"
SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]


def fail(message):
    print(f"::error::{message}")
    sys.exit(1)


def set_output(name, value):
    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a", encoding="utf-8") as handle:
            handle.write(f"{name}={value}\n")


def main():
    raw_key = os.environ.get("GDOC_SERVICE_ACCOUNT_KEY", "").strip()
    if not raw_key:
        fail("GDOC_SERVICE_ACCOUNT_KEY is empty. Add the service account JSON key as a repository secret.")

    doc_id = os.environ.get("GDOC_ID", "").strip()
    if not doc_id:
        fail("GDOC_ID is empty.")

    pdf_path = pathlib.Path(os.environ.get("RESUME_PDF_PATH", "assets/pdf/resume.pdf"))
    version_path = pathlib.Path(os.environ.get("VERSION_FILE", ".github/resume-version.json"))
    force = os.environ.get("FORCE", "").lower() == "true"

    try:
        info = json.loads(raw_key)
    except json.JSONDecodeError as exc:
        fail(f"GDOC_SERVICE_ACCOUNT_KEY is not valid JSON: {exc}")

    credentials = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    session = AuthorizedSession(credentials)

    # 1. Cheap metadata request - this is the gate.
    meta = session.get(
        f"{DRIVE_FILES}/{doc_id}",
        params={"fields": "id,name,version,modifiedTime,mimeType", "supportsAllDrives": "true"},
        timeout=30,
    )
    if meta.status_code == 404:
        fail(
            f"Document {doc_id} not found. Share it (Viewer) with the service account: "
            f"{info.get('client_email', '<unknown>')}"
        )
    if meta.status_code == 403:
        fail(
            f"Access denied to {doc_id}. Share it (Viewer) with {info.get('client_email', '<unknown>')} "
            "and confirm the Drive API is enabled for the project."
        )
    if not meta.ok:
        fail(f"Drive metadata request failed: HTTP {meta.status_code} {meta.text[:400]}")

    meta = meta.json()
    remote_version = str(meta.get("version", ""))
    if not remote_version:
        fail("Drive did not return a version for the document.")

    print(f"Document : {meta.get('name')}")
    print(f"Version  : {remote_version} (modified {meta.get('modifiedTime')})")

    stored_version = None
    if version_path.exists():
        try:
            stored_version = str(json.loads(version_path.read_text(encoding="utf-8")).get("version", ""))
        except (json.JSONDecodeError, OSError):
            stored_version = None
    print(f"Last seen: {stored_version or '(none)'}")

    if not force and stored_version == remote_version and pdf_path.exists():
        print("Unchanged since the last run - nothing to do.")
        set_output("changed", "false")
        return

    # 2. Only now do we pay for the export.
    print("Exporting PDF...")
    export = session.get(
        f"{DRIVE_FILES}/{doc_id}/export",
        params={"mimeType": "application/pdf"},
        timeout=120,
    )
    if not export.ok:
        fail(f"Export failed: HTTP {export.status_code} {export.text[:400]}")

    body = export.content
    if not body.startswith(b"%PDF"):
        fail(f"Export did not return a PDF (got {len(body)} bytes starting {body[:16]!r}).")

    previous = pdf_path.read_bytes() if pdf_path.exists() else None
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    pdf_path.write_bytes(body)

    version_path.parent.mkdir(parents=True, exist_ok=True)
    version_path.write_text(
        json.dumps(
            {
                "document_id": doc_id,
                "name": meta.get("name"),
                "version": remote_version,
                "modifiedTime": meta.get("modifiedTime"),
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    if previous == body:
        print(f"Version changed but the rendered PDF is byte-identical; recording version only.")
    else:
        print(f"Wrote {pdf_path} ({len(body):,} bytes).")
    set_output("changed", "true")


if __name__ == "__main__":
    main()
