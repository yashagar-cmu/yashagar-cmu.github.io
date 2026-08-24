---
layout: page
title: Malloc, Cache and Shell
description: Allocators, cache simulation and a Unix shell — the CMU systems gauntlet
importance: 3
---

A series of low-level systems projects from CMU's Computer Systems course (Spring 2026).

## Memory allocator

I implemented `malloc` on top of `mmap` using free lists — implicit, explicit and segregated — with block coalescing and a range of fit policies. Throughput was optimized using a Better Fit policy, and memory utilization using segregated lists with miniblocks and no footers.

## Cache simulator

A cache simulator, followed by an optimized matrix transpose that used tiling to eliminate evictions. The transpose placed **4th in a class of 200**.

## Shell

A Unix shell with signal handling, background and foreground job control, forking and reaping of child processes, and IO redirection.

## Parallel file system

Finally, a file system parallelized with reader–writer locks, enabling concurrent reads and writes across shared inodes, blocks and directories.
