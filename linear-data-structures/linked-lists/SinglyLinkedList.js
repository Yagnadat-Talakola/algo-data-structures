/**
 * Illustrating a Singly Linked List in JavaScript.
 * A Linked List consists of nodes, where each node contains data and a reference to the next node.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1) time
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) time
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // O(n) time to find the node, but O(1) to delete it once found
  delete(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
          this.tail = currentNode;
        }
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(`List: ${array.join(' -> ')} (Length: ${this.length})`);
  }
}

// Testing our Singly Linked List
const myLinkedList = new SinglyLinkedList();
console.log("\n--- Singly Linked List Operations ---");
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.printList();

console.log("\nPrepending 5:");
myLinkedList.prepend(5);
myLinkedList.printList();

console.log("\nDeleting 15:");
myLinkedList.delete(15);
myLinkedList.printList();

console.log("\nSummary:");
console.log("Linked Lists: O(1) insertion/deletion at head/tail, but O(n) for random access.");
