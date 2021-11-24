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

function binarySearch2(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((hi + lo) / 2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    if (target === arr[mid]) {
      // Return true
      return true;
      // If the target is higher than the midpoint...
    } else if (target > arr[mid]) {
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
      // If the target is less than the midpoint...
    } else {
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // 1
