---
layout: about
title: about
permalink: /
subtitle: MS student in Intelligent Information Systems at <a href="https://www.cs.cmu.edu/">Carnegie Mellon University</a>, School of Computer Science.

profile:
  align: right
  # image: prof_pic.jpg # TODO: add your photo to assets/img/prof_pic.jpg and uncomment
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>School of Computer Science</p>
    <p>Carnegie Mellon University</p>
    <p>Pittsburgh, PA</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a Master's student in Intelligent Information Systems at Carnegie Mellon University's School of Computer Science, advised by Prof. Tianqi Chen — the creator of TVM and XGBoost — where I work on machine learning compilers.

My interest is machine learning systems: the unglamorous work of making models actually run fast on real hardware. I'm currently at [Modular](https://www.modular.com/) as an AI Performance Engineering intern, where I work on pinned host-memory allocation and NUMA-aware page-faulting pipelines for tiered KV-cache offload — the plumbing that makes trillion-parameter MoE serving practical on a single 8-GPU node.

Before CMU I spent two years at [Squarepoint Capital](https://www.squarepoint-capital.com/) writing low-latency C++ for FX Options trading systems. I did my undergraduate degree in Computer Science at [IIT Kharagpur](https://www.iitkgp.ac.in/), and contributed to _YesBut_, a vision-language model benchmark published at EMNLP 2024.

Coursework and projects have taken me through CUDA kernel optimization — tiled matmul at 85% of cuBLAS, Flash Attention at 77% of PyTorch — quantization-aware ASR training down to 1-bit weights, and the usual systems gauntlet of allocators, cache simulators and shells.
