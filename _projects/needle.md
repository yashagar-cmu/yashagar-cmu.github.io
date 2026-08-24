---
layout: page
title: Needle
description: CUDA kernel optimization and an automatic differentiation engine, built from scratch
importance: 1
---

A deep learning framework built from the ground up for the Deep Learning Systems course at CMU (Fall 2025) — tensors, autodiff, neural network modules and the CUDA kernels underneath them.

## Kernel optimization

The matrix multiplication kernel was optimized through tiling, vectorization and global-memory coalescing, reaching **85% of cuBLAS performance**.

I also implemented **Flash Attention**, including kernel fusion, tiling and online softmax, which reached **77% of PyTorch's performance**.

## Automatic differentiation

The autodiff engine is a `Tensor` abstraction with a full complement of mathematical operations, plus `nn.Module` implementations for convolutional layers, RNNs and multi-head attention.

## NDArray backend

Underneath sits an `NDArray` class supporting reshaping, broadcasting, summation and matrix multiplication, with both C++ and CUDA backends.
