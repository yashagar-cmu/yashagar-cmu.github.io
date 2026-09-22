# Route Graph

Paste the output of `netstat -rn` (macOS/BSD, Linux, Windows) and read the routing
table as a graph. Lives at [/netstat](https://yash-agarwal.org/netstat); everything
runs in the browser. Built while taking 15-441 at CMU.

| File | What it is |
| --- | --- |
| `page.html` | The markup (input panel, controls, graph container, help sections). |
| `route-graph.css` | Styles, all scoped under `.rg`. The `SITE-TOKENS` block maps the tool's tokens onto the site's design tokens. |
| `model.js` | Parser for the three `netstat` formats, address/prefix helpers, the tree model, plain-English observations, table diffing. |
| `ui.js` | Fabricated example tables, tidy-tree layout, SVG rendering, filters, tooltips, longest-prefix trace with packet walk and range view, share links. `ui.js` uses globals defined in `model.js`, so they are inlined as one script, never bundled as modules. |
| `standalone-tokens.css`, `build_artifact.py` | The standalone version published as a claude.ai artifact. `python3 src/route-graph/build_artifact.py` writes `route-graph-artifact.html` (gitignored). |
| `cli/routeviz.py` | The original Python CLI (stdlib only): `python3 src/route-graph/cli/routeviz.py --live -f text`, `-f svg`, `-f dot`, `--to 8.8.8.8`. Its `-f html` output uses `cli/routeviz_template.html`, an older render of the same idea. |

`src/pages/netstat.astro` composes the page: it imports `page.html`, `model.js` and
`ui.js` as raw text and the stylesheet as CSS, so there is no build step for the site.
The examples are fabricated tables (nothing from a real machine).
