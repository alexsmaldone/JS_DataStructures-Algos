/*
Merging Arrays
- in order to implement a merge sort, it's useful to first implement a function responsible for merging 2 sorted arrays
- given 2 sorted arrays, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- THis function should run in O(n+m) time and O(n+m) space complexity
*/

/*
Merging Arrays PseudoCode
- create an empty array, take a look at the smallest values in each input array
- while there are still values we haven't looked at
  - if the value in the first array is smaller than the value in the second array, push value in the first array into our results and move on to the next value in the first array
  - if the value in the first array is larger than the value in the second array, pus hvalue in the second array into our results and move on to the next value in the second array
  - once we exhaust one array, push in all the reamining values from the other array
*/

// MERGE FUNCTION
function merge(arr1, arr2) {
  let result = [];

  let arr1Indx = 0;
  let arr2Indx = 0;

  while (arr1Indx < arr1.length && arr2Indx < arr2.length) {
    if (arr2[arr2Indx] > arr1[arr1Indx]) {
      result.push(arr1[arr1Indx]);
      arr1Indx++;
    } else {
      result.push(arr2[arr2Indx]);
      arr2Indx++;
    }
  }
  while (arr1Indx < arr1.length) {
    result.push(arr1[arr1Indx]);
    arr1Indx++;
  }
  while (arr2Indx < arr2.length) {
    result.push(arr2[arr2Indx]);
    arr2Indx++;
  }

  return result;
}

/*
MergeSort PseudoCode
- break up array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- once the array has been merged back together, return the merged (and sorted!) array;
*/

// MergeSort Function

let arr1 = [10, 24, 76, 73, 72, 1, 9];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(arr1));
