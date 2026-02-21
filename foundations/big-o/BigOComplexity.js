/**
 * Illustrating different Big O time complexities with code examples.
 */

// O(1) - Constant Time
// The time taken is always the same, regardless of the size of 'n'.
function constantTime(n) {
  console.log("O(1): Always takes the same time.");
  return n * n; // Just one operation
}

// O(n) - Linear Time
// The time taken grows linearly with the size of 'n'.
function linearTime(n) {
  console.log(`
O(n): Printing numbers from 1 up to ${n}.`);
  for (let i = 1; i <= n; i++) {
    process.stdout.write(i + " ");
  }
  console.log();
}

// O(n^2) - Quadratic Time
// The time taken grows proportionally to the square of 'n'. Common with nested loops.
function quadraticTime(n) {
  console.log(`
O(n^2): Printing pairs up to (${n}, ${n}).`);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(`(${i}, ${j}) `);
    }
    console.log();
  }
}

// O(log n) - Logarithmic Time
// The time taken halves with each step.
function logarithmicTime(n) {
  console.log(`
O(log n): Halving ${n} until it's less than or equal to 1.`);
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
    process.stdout.write(n + " ");
  }
  console.log(`
Total steps: ${count}`);
}

// Test our functions
const nValue = 5;
constantTime(nValue);
linearTime(nValue);
quadraticTime(nValue);
logarithmicTime(nValue);

console.log("Summary:");
console.log("O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)");
