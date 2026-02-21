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

## 2. Linked Lists

**Linked Lists** consist of nodes that point to the next (and sometimes previous) node. Unlike arrays, nodes are not stored in contiguous memory.

- **Singly Linked List:** Each node points only to the `next` node.
- **Doubly Linked List:** Each node points to both `next` and `prev` nodes.
- **Circular Linked List:** The last node points back to the first node.

### Why Linked Lists?
1.  **Dynamic Size:** No need to pre-allocate memory or resize arrays.
2.  **Efficient Insertion/Deletion:** $O(1)$ at the head (and tail if a tail pointer is maintained).
3.  **No shifting required:** When deleting an element, you only update pointers.

---
Next, we'll implement a **Doubly Linked List** to see how the addition of a `prev` pointer changes things.

