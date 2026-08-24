# Resume sync from Google Docs

[`assets/pdf/resume.pdf`](assets/pdf/resume.pdf) is regenerated from a Google Doc by
[`.github/workflows/update-resume.yml`](.github/workflows/update-resume.yml), which runs daily at
07:00 UTC and can also be triggered by hand from the Actions tab.

**No secrets and no setup are required.** The doc is shared as "anyone with the link can view", so
Google's export endpoint answers an ordinary unauthenticated request.

## How it works

Google Drive renders the PDF itself:

```
https://docs.google.com/document/d/<DOC_ID>/export?format=pdf
```

That returns exactly what **File → Download → PDF Document** produces in the Docs UI. There is no
`.docx` intermediate and no LibreOffice step, so the layout cannot drift from what you see when
editing.

The change gate is a SHA-256 of the exported bytes compared against the PDF already committed.
Google's export is byte-stable for an unchanged document — exporting the same doc three times in a
row produced an identical hash — so an unedited doc simply hashes the same and the job stops.

| Outcome                        | What happens                                              |
| ------------------------------ | --------------------------------------------------------- |
| Hash matches the committed PDF | Job exits. No commit, no deploy.                          |
| Hash differs                   | Write the PDF, commit it, then run the site deploy.       |
| Response is not a PDF          | Job fails loudly and the committed PDF is left untouched. |

The script uses only the Python standard library, so the workflow needs no `pip install` step.

## Why the deploy is called explicitly

The workflow commits and pushes the new PDF to `main`, but that push **does not** start the
`Deploy site` workflow on its own. GitHub deliberately suppresses workflow triggers for pushes made
with the automatic `GITHUB_TOKEN`, to stop workflows from re-triggering themselves in a loop.

You can see this in this repo's own history: the old Scholar-citations workflow pushed 18 commits to
`main` and not one of them produced a deploy run.

The fix is not a personal access token. [`deploy.yml`](.github/workflows/deploy.yml) accepts
`workflow_call`, so `update-resume.yml` invokes it as a reusable workflow — it runs as a second job
inside the same run, which sidesteps the restriction entirely:

```yaml
deploy:
  needs: update-resume
  if: needs.update-resume.outputs.committed == 'true'
  uses: ./.github/workflows/deploy.yml
  with:
    ref: main
```

`ref: main` matters. A called workflow otherwise checks out the commit that _started_ the run, which
is one commit older than the PDF we just pushed, and the deploy would silently ship the previous
version.

## Configuration

In the workflow's `env:` block:

| Variable          | Meaning                                        |
| ----------------- | ---------------------------------------------- |
| `GDOC_ID`         | Document ID — the long string in the doc's URL |
| `RESUME_PDF_PATH` | Where the PDF is written                       |

The PDF is surfaced on the site in two places, both of which need updating if you move it:

- `cv_pdf` in [`_data/socials.yml`](_data/socials.yml) — the CV icon under your bio
- [`_pages/cv.md`](_pages/cv.md) — the embedded viewer and download buttons on `/cv/`

## If sharing changes

If the doc is ever set back to private, the export returns a sign-in HTML page instead of a PDF. The
script checks for the `%PDF` magic bytes rather than trusting the status code, so it fails with a
clear message and leaves the committed PDF alone — the site keeps serving the last good version.

To keep the doc private instead, you would need Drive API credentials: a service account with
read-only access to the file, its JSON key in a repository secret, and `files.export` in place of
the public URL. That also exposes Drive's `version` counter, which makes an even cheaper gate (one
metadata call, no download) — but it costs a Google Cloud project to set up.
