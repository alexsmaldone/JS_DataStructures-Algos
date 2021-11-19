/*
- start looping  with a variable called i at the end of the array towards the beginning
- start with an inner loop with a variable called j from the beginning until i - 1
- if arr[j] is greater than arr[j+i], swap those two values
- return the sorted array
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Optimized for nearly sorted array, noSwaps variable will stop the sorting if it's already sorted
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

let arr1 = [4, 1, 6, 7, 2, 9, 3, 20, 12];

console.log(bubbleSort(arr1));
