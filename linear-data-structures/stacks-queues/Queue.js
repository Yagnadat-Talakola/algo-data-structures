/**
 * Illustrating a Queue (FIFO - First In, First Out) in JavaScript.
 * We'll implement it using a Linked List structure for O(1) performance.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Look at the first element
  peek() {
    return this.first;
  }

  // Add to the back - O(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Remove from the front - O(1)
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Testing the Queue
const myQueue = new Queue();
console.log("--- Queue Operations (FIFO) ---");
myQueue.enqueue("Alice");
myQueue.enqueue("Bob");
myQueue.enqueue("Charlie");

console.log("Peek first:", myQueue.peek().value); // Should be Alice

console.log("Dequeuing:", myQueue.dequeue()); // Removes Alice
console.log("Dequeuing:", myQueue.dequeue()); // Removes Bob

console.log("New first:", myQueue.peek().value); // Should be Charlie
