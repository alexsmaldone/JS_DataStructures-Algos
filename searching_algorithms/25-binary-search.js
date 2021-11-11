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
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // 1
