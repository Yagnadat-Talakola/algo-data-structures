# Phase 1: Foundations & Complexity Analysis

In this phase, we establish the fundamental concepts that allow us to evaluate code efficiency and understand how data is stored in memory.

## 1. Big O Notation

Big O notation is a mathematical way of describing the performance of an algorithm as its input size grows. It helps us answer: **"How does the time (or space) required by my code change as I give it more data?"**

-   **Constant Time (O(1)):** The algorithm takes the same amount of time regardless of input size (e.g., accessing an array element by index).
-   **Linear Time (O(n)):** The time taken grows proportionally with the input size (e.g., a simple loop through an array).
-   **Quadratic Time (O(n^2)):** Common in nested loops. Performance degrades quickly as data grows.
-   **Logarithmic Time (O(log n)):** Very efficient, often found in Divide and Conquer algorithms like Binary Search.
-   **Exponential Time (O(2^n)):** The time taken doubles with each additional element (e.g., some recursive solutions).

## 2. Memory Management

Understanding where data lives in memory is crucial for optimization and avoiding bugs like memory leaks.

-   **Stack Memory:** Used for static memory allocation and thread execution. It's fast, manages its own memory (LIFO), but has size limits.
-   **Heap Memory:** Used for dynamic memory allocation (objects, arrays). It's larger and slower than the stack, and requires manual management (C/C++) or Garbage Collection (Java/JavaScript).

---
Next, we'll implement some code examples to see these Big O complexities in action.
