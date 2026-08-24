---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 2
description: Machine learning systems, GPU kernels and compilers.
_styles: >
  .resume-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .resume-updated {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }

  /* Height is set inline from the PDF's real page count so the whole document
     is laid out at once - the embed never scrolls internally, only the page does. */
  .resume-frame {
    width: 100%;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    overflow: hidden;
  }

  .resume-frame object {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .resume-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 2rem;
    text-align: center;
  }

  /* Inline PDF viewing is unreliable on phones - offer the download instead. */
  @media (max-width: 576px) {
    .resume-frame {
      display: none;
    }
  }
---

{% assign resume = site.data.resume %}
{% assign pages = resume.pages | default: 1 %}
{% comment %}US Letter is 8.5 x 11, so N pages stack to 11N tall at the same width.{% endcomment %}
{% assign stack_height = pages | times: 11 %}
{% comment %}
GitHub Pages serves the PDF with max-age=600 and no cache-buster, so a reader who
opened the CV recently keeps getting the old file. Key the URL on the content hash
the way the theme does for CSS/JS, so every new resume is a new URL.
{% endcomment %}
{% assign pdf_url = '/assets/pdf/resume.pdf' | relative_url %}
{% if resume.sha256 %}
{% assign cache_key = resume.sha256 | slice: 0, 12 %}
{% assign pdf_url = pdf_url | append: '?v=' | append: cache_key %}
{% endif %}

<div class="resume-actions">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ pdf_url }}" download="Yash_Agarwal_CV.pdf">
    <i class="fa-solid fa-download"></i> Download
  </a>
  {% if resume.last_updated %}
    <time class="resume-updated" datetime="{{ resume.last_updated }}">
      Last updated {{ resume.last_updated | date: "%-d %b %Y, %H:%M UTC" }}
    </time>
  {% endif %}
</div>

<div class="resume-frame" style="aspect-ratio: 8.5 / {{ stack_height }};">
  <object data="{{ pdf_url }}#toolbar=0&amp;navpanes=0&amp;scrollbar=0&amp;view=FitH" type="application/pdf" title="Yash Agarwal - CV">
    <p class="resume-fallback">
      This browser won't show PDFs inline —
      <a href="{{ pdf_url }}" target="_blank" rel="noopener">open the CV in a new tab</a>.
    </p>
  </object>
</div>

<script>
  // The timestamp is baked in as UTC at build time; re-render it in the reader's
  // own zone. Falls back to the server-rendered UTC text if anything goes wrong.
  (function () {
    document.querySelectorAll("time.resume-updated[datetime]").forEach(function (el) {
      var when = new Date(el.getAttribute("datetime"));
      if (isNaN(when.getTime())) return;
      try {
        el.textContent =
          "Last updated " +
          when.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
          });
      } catch (e) {
        /* keep the UTC fallback already in the element */
      }
    });
  })();
</script>
