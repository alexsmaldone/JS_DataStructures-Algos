/*
function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead;
*/

function minSubArrayLen(array, num) {
  if (num >= Math.max(...array)) return 1;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
