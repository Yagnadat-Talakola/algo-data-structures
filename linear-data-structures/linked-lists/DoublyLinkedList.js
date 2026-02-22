/**
 * Illustrating a Doubly Linked List in JavaScript.
 * Each node points to BOTH the next and the previous node.
 */

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1) time
  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) time
  prepend(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // O(n) time, but we can search from head or tail (faster on average)
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(`Forward: ${array.join(' <-> ')}`);
  }

  printReverse() {
    const array = [];
    let currentNode = this.tail;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log(`Reverse: ${array.join(' <-> ')}`);
  }
}

// Testing our Doubly Linked List
const myDLL = new DoublyLinkedList();
console.log("\n--- Doubly Linked List Operations ---");
myDLL.append(10);
myDLL.append(20);
myDLL.append(30);
myDLL.prepend(5);

myDLL.printList();
myDLL.printReverse();

console.log("\nSummary:");
console.log("Doubly Linked Lists allow bidirectional traversal but use more memory per node.");
