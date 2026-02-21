/**
 * Illustrating the Sliding Window pattern in JavaScript.
 * Problem: Find the maximum sum of any contiguous subarray of size 'k'.
 */

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let windowSum = 0;

  console.log(`Finding Max Subarray Sum (Window Size: ${k}) in [${arr}]`);

  // 1. Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // 2. "Slide" the window across the array
  for (let i = k; i < arr.length; i++) {
    // Add the next element, subtract the first element of the previous window
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
    console.log(`Window slid to index ${i}: Current Sum = ${windowSum}, Max Sum = ${maxSum}`);
  }

  return maxSum;
}

const data = [2, 1, 5, 1, 3, 2];
const k = 3;
const result = maxSubarraySum(data, k);

console.log(`
Final Result: ${result}`);

console.log("Summary:");
console.log("Sliding Window: O(n) time, O(1) space.");
console.log("Without this, a naive nested loop would be O(n*k).");
