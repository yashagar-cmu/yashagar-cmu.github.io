# yash-agarwal.org

Personal site — [yash-agarwal.org](https://yash-agarwal.org).

Built with [Astro](https://astro.build) on the
[astro-erudite](https://github.com/jktrn/astro-erudite) template (MIT, see `LICENSE`).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Content

| What        | Where                    |
| ----------- | ------------------------ |
| Intro       | `src/pages/index.astro`  |
| Blog posts  | `src/content/blog/`      |
| Projects    | `src/content/projects/`  |
| News        | `src/content/news/`      |
| Nav/socials | `src/consts.ts`          |

`src/content/blog/formatting-reference/` is a `draft: true` post documenting every
markdown feature the theme supports. It never publishes; delete it when you no
longer need it.

## Resume

`public/static/resume.pdf` is regenerated daily from Google Docs by
[`.github/workflows/update-resume.yml`](.github/workflows/update-resume.yml).
It only commits when the exported bytes change. See [RESUME-SYNC.md](RESUME-SYNC.md).

## Deploy

Pushing to `main` builds and publishes to the `gh-pages` branch, which GitHub Pages
serves at the domain in `public/CNAME`.
