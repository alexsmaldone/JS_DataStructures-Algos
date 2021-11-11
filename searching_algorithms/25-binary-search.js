/*
- function accepts sorted array and a value
- create a left pointer at the start of the array, and a right pointer
at the end of the array
- while the left pointer comes before the right pointer:
  - create a pointer in the middle
  - if u find the value you want, return the index
  - if value is too small, move the left pointer up
  - if value too large, move right pointer down
- if never find value, return -1
*/

function binarySearch(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  let left = arr[leftIndex];
  let right = arr[rightIndex];

  while (left < right) {
    let middle = arr[Math.floor(0 + arr.length) / 2];
    if (left === val) return leftIndex;
    if (right === val) return leftIndex;
  }
}
