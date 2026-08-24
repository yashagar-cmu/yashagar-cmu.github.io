---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 2
description: Machine learning systems, GPU kernels and compilers.
_styles: >
  .resume-actions {
    margin-bottom: 1.5rem;
  }

  .resume-frame {
    width: 100%;
    aspect-ratio: 8.5 / 11;
    max-height: 85vh;
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

<div class="resume-actions">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" rel="noopener">
    <i class="fa-solid fa-file-pdf"></i> Open PDF
  </a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/resume.pdf' | relative_url }}" download>
    <i class="fa-solid fa-download"></i> Download
  </a>
</div>

<div class="resume-frame">
  <object data="{{ '/assets/pdf/resume.pdf' | relative_url }}" type="application/pdf" title="Yash Agarwal - CV">
    <p class="resume-fallback">
      This browser won't show PDFs inline —
      <a href="{{ '/assets/pdf/resume.pdf' | relative_url }}" target="_blank" rel="noopener">open the CV in a new tab</a>.
    </p>
  </object>
</div>
