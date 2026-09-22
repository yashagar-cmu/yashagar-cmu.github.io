#!/usr/bin/env python3
"""Assemble the standalone Route Graph page for the claude.ai artifact.

    python3 src/route-graph/build_artifact.py            # -> route-graph-artifact.html (gitignored)

The site page (src/pages/netstat.astro) needs no build: Astro composes page.html,
route-graph.css, model.js and ui.js at build time. The artifact is the same page
made self-sufficient: its own tokens and body chrome (standalone-tokens.css instead
of the SITE-TOKENS block), fonts from Google Fonts, no data-embedded marker (so the
script runs its own theme toggle), and ASCII-only text because the artifact host
adds no charset of its own. Publish the output with the Artifact tool against
https://claude.ai/artifact/Jn3tHtyDBMGu2z31T9jZiQ to update the existing artifact."""
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent
read = lambda name: (HERE / name).read_text(encoding="utf-8")
ascii_html = lambda s: re.sub(r"[^\x00-\x7f]", lambda m: "&#%d;" % ord(m.group()), s)
ascii_js = lambda s: re.sub(r"[^\x00-\x7f]", lambda m: "\\u%04x" % ord(m.group()), s)

css = re.sub(r"/\* SITE-TOKENS-START \*/.*?/\* SITE-TOKENS-END \*/\n", lambda m: read("standalone-tokens.css"), read("route-graph.css"), flags=re.S)
body = re.sub(r"<!--.*?-->\n", "", read("page.html"), count=1, flags=re.S).replace('<div class="rg" data-embedded>', '<div class="rg">', 1)
head = ('<title>Route Graph</title>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
        'family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap">\n')
page = ascii_html(head + "<style>\n" + css + "</style>\n" + body) + "<script>\n" + ascii_js(read("model.js") + "\n" + read("ui.js")) + "\n</script>\n"
out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "route-graph-artifact.html")
out.write_text(page, encoding="utf-8")
print("wrote", out, len(page.encode()), "bytes")
