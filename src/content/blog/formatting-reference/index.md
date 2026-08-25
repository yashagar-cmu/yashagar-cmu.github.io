---
title: "Formatting reference"
description: "Every markdown feature this site supports, in one place. Draft — delete it once you've got the hang of it."
date: 2026-08-24
draft: true
tags: ["meta"]
authors: ["yash"]
---

This post is `draft: true`, so it never appears on the live site or in the RSS feed. It's here so you can see what the theme can do without hunting through docs. Delete it whenever.

## Code blocks

The main reason this theme was picked. A plain fenced block gets line numbers automatically:

```cpp
__global__ void tiled_matmul(const float* A, const float* B, float* C, int N) {
  __shared__ float As[TILE][TILE];
  __shared__ float Bs[TILE][TILE];
  int row = blockIdx.y * TILE + threadIdx.y;
  int col = blockIdx.x * TILE + threadIdx.x;
  float acc = 0.0f;
```

Add a title to get a file tab, and use `{n-m}` to highlight the lines that matter:

```cpp title="matmul.cu" {4-5}
for (int t = 0; t < N / TILE; ++t) {
  As[threadIdx.y][threadIdx.x] = A[row * N + t * TILE + threadIdx.x];
  Bs[threadIdx.y][threadIdx.x] = B[(t * TILE + threadIdx.y) * N + col];
  __syncthreads();  // every thread must land before the tile is read
  for (int k = 0; k < TILE; ++k) acc += As[threadIdx.y][k] * Bs[k][threadIdx.x];
  __syncthreads();
}
```

`startLineNumber` keeps the numbering honest when you're quoting the middle of a real file, and `collapse` folds the boilerplate so a long excerpt stays readable:

```cpp title="attention.cu" startLineNumber=137 collapse={1-4}
  const int tid = threadIdx.x;
  const int lane = tid % 32;
  const int warp = tid / 32;
  extern __shared__ float smem[];
  float m_prev = m_i, m_curr = fmaxf(m_prev, row_max);
  l_i = l_i * __expf(m_prev - m_curr) + row_sum * __expf(row_max - m_curr);
```

Use `del`/`ins` for diffs, and `"text"` to mark a phrase rather than a line:

```python title="quantize.py" ins={3} del={2} "straight_through"
def forward(self, x):
    return torch.round(x / self.scale)
    return straight_through(x / self.scale)
```

Inline code is syntax-highlighted too — `{:cpp}__shfl_sync(0xffffffff, val, 0)` reads as code inside a sentence, not grey mush.

## Math

Inline math like $\mathcal{O}(n \log n)$ works with single dollars, and display math with double:

$$
\text{softmax}(x_i) = \frac{e^{x_i - \max(x)}}{\sum_j e^{x_j - \max(x)}}
$$

It renders to native MathML — no JavaScript, no stylesheet to load.

## Callouts

:::note
Five variants exist: `note`, `tip`, `warning`, `caution` and `important`.
:::

:::warning
Give a callout a custom title by putting it in brackets after the name.
:::

## Everything else

Standard markdown works as you'd expect — **bold**, *italic*, [links](https://yash-agarwal.org), lists, and tables:

| Kernel | Baseline | Optimized | Speedup |
| ------ | -------- | --------- | ------- |
| matmul | 1.00×    | 0.85×     | cuBLAS  |
| attn   | 1.00×    | 0.77×     | PyTorch |

> Blockquotes are here too.

Headings automatically get anchor links and populate the table of contents on the right.

## Multi-part series

A post can have sub-posts: make a folder, put `index.md` in it, and add sibling `.md` files alongside. Each gets an `order` in its frontmatter, and the theme renders series navigation between them. Good for "Writing a fast GEMM kernel, parts 1–5".
