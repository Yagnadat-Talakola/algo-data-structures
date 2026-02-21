/**
 * Illustrating the Two Pointers pattern in JavaScript.
 * This technique is efficient (O(n) time, O(1) space).
 */

// Problem 1: Reverse an array in place
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  console.log(`Reversing Array: [${arr}]`);
  while (left < right) {
    // Swap elements at left and right pointers
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// Problem 2: Two Sum (Sorted Array)
// Find if there are two numbers that add up to a target.
// Returns indices of the two numbers.
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  console.log(`Finding Two Sum for target ${target} in [${arr}]`);
  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right]; // Found the pair!
    } else if (currentSum < target) {
      left++; // Need a larger sum, so move left pointer to the right
    } else {
      right--; // Need a smaller sum, so move right pointer to the left
    }
  }
  return null; // No pair found
}

// Test Reverse Array
const myArr = [1, 2, 3, 4, 5];
const reversed = reverseArray([...myArr]); // Pass a copy
console.log(`Result: [${reversed}]`);

// Test Two Sum Sorted
const sortedArr = [1, 3, 4, 6, 8, 10];
const targetValue = 14;
const pair = twoSumSorted(sortedArr, targetValue);
if (pair) {
  console.log(`Result: Pair found at indices [${pair}] -> ${sortedArr[pair[0]]} + ${sortedArr[pair[1]]} = ${targetValue}`);
} else {
  console.log("Result: No pair found.");
}

console.log("Summary:");
console.log("Two Pointers (Reverse): O(n) time, O(1) space.");
console.log("Two Pointers (Sum Sorted): O(n) time, O(1) space.");
