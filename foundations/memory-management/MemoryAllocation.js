/**
 * Illustrating memory management concepts (Stack and Heap) in JavaScript.
 * While JS uses a Garbage Collector, the conceptual distinction between
 * the call stack and the heap is still vital for understanding performance.
 */

// Stack Memory: Stores local variables, primitive data types (number, string, boolean),
// and function calls in a last-in, first-out (LIFO) order.
function stackAllocation() {
  let a = 10; // Stored on the stack
  let b = 20; // Stored on the stack
  let c = a + b; // Result also on the stack
  console.log(`Stack Allocation: a = ${a}, b = ${b}, c = ${c}`);
  // These variables are cleared once the function returns.
}

// Heap Memory: Stores objects and arrays, which are dynamically allocated.
// References to these objects are stored on the stack.
function heapAllocation() {
  let user = { // 'user' variable is on the stack, but the object is on the heap
    name: "John Doe",
    age: 25
  };

  let numbers = [1, 2, 3, 4, 5]; // 'numbers' is on the stack, but the array is on the heap

  console.log("Heap Allocation: Object and Array stored on the heap.");
  console.log(`User Name: ${user.name}`);
  console.log(`Numbers Array Length: ${numbers.length}`);
}

// Visualizing recursive stack frames
function recursiveStack(n) {
  if (n <= 0) {
    console.log("Reached the base case.");
    return;
  }
  console.log(`Recursive Call: n = ${n} (Adding frame to call stack)`);
  recursiveStack(n - 1);
  console.log(`Exiting frame: n = ${n} (Removing frame from call stack)`);
}

stackAllocation();
heapAllocation();
recursiveStack(3);

console.log("Summary: ");
console.log("Stack: Fixed-size, fast, automatic cleanup.");
console.log("Heap: Dynamic size, larger, slower, requires Garbage Collection.");
