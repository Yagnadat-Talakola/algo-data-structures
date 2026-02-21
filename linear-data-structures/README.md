# Phase 2: Linear Data Structures

Linear data structures organize elements sequentially, where each element is connected to its previous and next element.

## 1. Arrays & Strings

**Arrays** are a collection of elements stored in contiguous memory locations. They allow for O(1) random access but O(n) insertion/deletion (due to shifting).
**Strings** are technically arrays of characters.

### Key Patterns:

- **Two Pointers:** Using two variables to point to different indices (often at the start and end) to solve problems in O(n) time and O(1) space. Common for:
  - Reversing an array.
  - Finding pairs in a sorted array (e.g., Two Sum).
- **Sliding Window:** A technique to maintain a subset of data (a "window") as you move through an array. Great for finding subarrays or substrings.

---
Next, we'll implement a Two Pointers example to solve the **Reverse Array** and **Two Sum (Sorted Array)** problems.
