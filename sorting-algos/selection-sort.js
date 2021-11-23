/*
- store first element as the smallest value you've seen so far
- cmpare this itme to the next itme in the array until you find a smaller number
- if smaller number is found, designate that smaller number tot be the new minimum
  - continue until th ened of the array
- if minimum is not the value(index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted
*/

const swap = (arr, indx1, indx2) => {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

let arr1 = [4, 1, 6, 7, 2, 9, 3, 20, 12];

console.log(selectionSort(arr1));

/* function selectionSort(arr) {
  // the `i` loop will track the index that points to the first element of the
  //    unsorted region: this means that the sorted region is everything left of
  //    index i and the unsorted region is everything to the right of index i

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // the `j` loop will iterate through the unsorted region and find the index
    // of the smallest element

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // after we find the minIndex in the unsorted region, swap that minIndex
    // with the first index of the unsorted region

    swap(arr, i, minIndex);
  }
  return arr;
} */
