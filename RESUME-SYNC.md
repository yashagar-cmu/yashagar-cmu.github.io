# Resume sync from Google Docs

`assets/pdf/resume.pdf` is regenerated from a Google Doc by
[`.github/workflows/update-resume.yml`](.github/workflows/update-resume.yml), which runs daily at
07:00 UTC and can also be triggered by hand.

## How it works

Google Drive renders the PDF itself — the Drive API's `files.export` endpoint returns exactly what
**File → Download → PDF Document** produces in the Docs UI. There is no `.docx` intermediate and no
LibreOffice step, so nothing about the layout can drift.

Every run first asks Drive for the document's `version`, a counter Drive increments on each
revision. The last value seen is committed to `.github/resume-version.json`:

| Document state     | What happens                                                        |
| ------------------ | ------------------------------------------------------------------- |
| Unedited           | One metadata request, then the job exits. No download, no commit.   |
| Edited             | Export the PDF, write both files, commit, optionally kick a deploy. |
| Export isn't a PDF | Job fails loudly and the committed PDF is left untouched.           |

## One-time setup

The document is private, so the workflow authenticates as a **service account** — a robot Google
account with read-only access to that one file. The doc stays private.

**1. Create the service account**

- Open the [Google Cloud console](https://console.cloud.google.com/) and create a project (or reuse one).
- Enable the **Google Drive API**: APIs & Services → Library → search "Google Drive API" → Enable.
- IAM & Admin → Service Accounts → **Create service account**. Any name works; no roles are needed.
- Open the new account → **Keys** → Add key → **Create new key** → **JSON**. A `.json` file downloads.
- Copy its `client_email`, which looks like `something@your-project.iam.gserviceaccount.com`.

**2. Share the doc with it**

Open the resume doc → **Share** → paste the `client_email` → give it **Viewer** → Share. Untick
"Notify people"; robot accounts have no inbox.

> If the doc lives in a Google Workspace account (e.g. an `andrew.cmu.edu` one) whose admin blocks
> external sharing, this step will fail. Either keep the doc in a personal Google account, or make a
> copy there and point `GDOC_ID` at the copy.

**3. Add the key as a repository secret**

GitHub → repo **Settings** → Secrets and variables → **Actions** → New repository secret:

- Name: `GDOC_SERVICE_ACCOUNT_KEY`
- Value: the entire contents of the downloaded JSON file

**4. Test it**

Actions → **Update resume PDF** → Run workflow → tick **force** → Run. Forcing skips the version
check so you get a real export on the first run.

## Optional: deploy immediately

GitHub deliberately does not let a workflow's own `GITHUB_TOKEN` commit trigger another workflow, so
the resume commit will not start a site deploy on its own. The PDF ships with your next push either
way.

To publish right away, create a [fine-grained PAT](https://github.com/settings/tokens) with
**Actions: read and write** and **Contents: read and write** on this repo, and save it as a secret
named `DEPLOY_PAT`. The workflow's last step notices it and dispatches the deploy. Without the
secret, that step is skipped.

## Configuration

Everything lives in the workflow's `env:` block:

| Variable          | Meaning                                        |
| ----------------- | ---------------------------------------------- |
| `GDOC_ID`         | Document ID — the long string in the doc's URL |
| `RESUME_PDF_PATH` | Where the PDF is written                       |
| `VERSION_FILE`    | Where the last seen version is recorded        |

The PDF is linked from the site by `cv_pdf` in [`_data/socials.yml`](_data/socials.yml) (the CV icon
under your bio) and in [`_pages/cv.md`](_pages/cv.md) (the download button on the CV page). If you
change `RESUME_PDF_PATH`, update both.

## Simpler alternative

If you would rather not create a service account, set the doc to **Anyone with the link → Viewer**.
`https://docs.google.com/document/d/<ID>/export?format=pdf` then works with no credentials at all,
and the workflow reduces to a `curl`. The trade-off: the doc becomes readable by anyone who has the
link, and Drive exposes no `version` field to unauthenticated callers, so the change gate would have
to fall back to hashing the exported bytes.
