#!/usr/bin/env python3
"""Export the resume Google Doc to PDF, and report whether it actually changed.

The doc is shared as "anyone with the link can view", so Google's own export
endpoint works with no credentials:

    https://docs.google.com/document/d/<ID>/export?format=pdf

Drive renders the PDF server-side - the same output as File > Download > PDF
in the Docs UI - so there is no .docx intermediate and no local conversion.

Change detection is a SHA-256 of the exported bytes compared against the PDF
already committed. Google's export is byte-stable for an unchanged document
(verified by exporting the same doc repeatedly), so an unedited doc hashes
identically and the workflow skips the commit.

Only the standard library is used, so the workflow needs no pip install.

Environment:
  GDOC_ID           document ID to export (required)
  RESUME_PDF_PATH   output path (default: assets/pdf/resume.pdf)
"""

import hashlib
import os
import pathlib
import sys
import urllib.error
import urllib.request

TIMEOUT = 120
UA = "Mozilla/5.0 (compatible; resume-sync/1.0; +https://github.com/yashagar-cmu)"


def fail(message):
    print(f"::error::{message}")
    sys.exit(1)


def set_output(name, value):
    path = os.environ.get("GITHUB_OUTPUT")
    if path:
        with open(path, "a", encoding="utf-8") as handle:
            handle.write(f"{name}={value}\n")
    print(f"{name}={value}")


def main():
    doc_id = os.environ.get("GDOC_ID", "").strip()
    if not doc_id:
        fail("GDOC_ID is empty.")

    pdf_path = pathlib.Path(os.environ.get("RESUME_PDF_PATH", "assets/pdf/resume.pdf"))
    url = f"https://docs.google.com/document/d/{doc_id}/export?format=pdf"

    print(f"Fetching {url}")
    request = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            body = response.read()
            final_url = response.geturl()
    except urllib.error.HTTPError as exc:
        if exc.code in (401, 403):
            fail(
                f"HTTP {exc.code} - the document is not publicly readable. Set its sharing to "
                '"Anyone with the link -> Viewer", or restore the service account flow.'
            )
        fail(f"HTTP {exc.code} fetching the document: {exc.reason}")
    except urllib.error.URLError as exc:
        fail(f"Could not reach Google Docs: {exc.reason}")

    # A private doc answers with an HTML sign-in page and HTTP 200 after redirects,
    # so check the payload rather than trusting the status code.
    if not body.startswith(b"%PDF"):
        hint = " (redirected to a sign-in page)" if "accounts.google.com" in final_url else ""
        fail(
            f"Response was not a PDF{hint}: {len(body)} bytes starting {body[:16]!r}. "
            'Check that sharing is set to "Anyone with the link -> Viewer".'
        )

    new_digest = hashlib.sha256(body).hexdigest()
    old_digest = hashlib.sha256(pdf_path.read_bytes()).hexdigest() if pdf_path.exists() else None

    print(f"exported : {len(body):,} bytes  sha256={new_digest}")
    print(f"committed: {old_digest or '(no existing file)'}")

    if old_digest == new_digest:
        print("Unchanged - nothing to commit.")
        set_output("changed", "false")
        return

    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    pdf_path.write_bytes(body)
    print(f"Updated {pdf_path}")
    set_output("changed", "true")


if __name__ == "__main__":
    main()
