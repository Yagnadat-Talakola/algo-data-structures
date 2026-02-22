/**
 * Illustrating a Stack (LIFO - Last In, First Out) in JavaScript.
 * We'll implement it using a Linked List structure for O(1) performance.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Look at the top element
  peek() {
    return this.top;
  }

  // Add to the top - O(1)
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  // Remove from the top - O(1)
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Testing the Stack
const myStack = new Stack();
console.log("--- Stack Operations (LIFO) ---");
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");

console.log("Peek top:", myStack.peek().value); // Should be Discord

console.log("Popping:", myStack.pop()); // Removes Discord
console.log("Popping:", myStack.pop()); // Removes Udemy

console.log("New top:", myStack.peek().value); // Should be Google
