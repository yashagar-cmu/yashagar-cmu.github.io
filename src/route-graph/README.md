# Route Graph

Paste the output of `netstat -rn` (macOS/BSD, Linux, Windows) and read the routing
table as a graph. Lives at [/netstat](https://yash-agarwal.org/netstat); everything
runs in the browser. Built while taking 15-441 at CMU.

| File | What it is |
| --- | --- |
| `page.html` | The markup (input panel, controls, graph container, help sections). |
| `route-graph.css` | Styles, all scoped under `.rg`; the first block maps the tool's tokens onto the site's design tokens. |
| `model.js` | Parser for the three `netstat` formats, address/prefix helpers, the tree model, plain-English observations, table diffing. |
| `ui.js` | Fabricated example tables (nothing from a real machine), tidy-tree layout, SVG rendering, filters, tooltips, longest-prefix trace with packet walk and range view, share links. It uses globals from `model.js`, so the two ship as one inline script, never as bundled modules. |

`src/pages/netstat.astro` composes the page: it imports `page.html`, `model.js` and
`ui.js` as raw text and the stylesheet as CSS, so there is no build step. The page
opens empty; the browser remembers the last table it drew, and "copy link" carries a
table in the URL.
