/*
given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum
sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements fromt he original array.
*/

function maxSubarraySum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
