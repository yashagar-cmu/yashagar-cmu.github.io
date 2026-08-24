---
layout: page
title: WhisQer
description: A quantization-trained Conformer for speech recognition, down to 1-bit weights
importance: 2
---

A quantization-aware Conformer ASR model built for the Deep Learning course at CMU (Fall 2025), exploring how far speech recognition models can be compressed before they break.

## Quantization

The architecture supports **2-bit and 1-bit precision variants** with learnable scaling parameters. Quantizing the encoder feed-forward networks and attention projections compressed a **108MB FP32 model down to 45.6MB at 2-bit**.

## Training

Recovering accuracy at those precisions needed teacher–student co-training, combining CTC and KL divergence loss with a straight-through estimator for the non-differentiable quantization step.

## Pipeline

The project includes an end-to-end PyTorch ASR training pipeline: a streaming audio dataloader, the feature extraction pipeline and CTC decoding.
