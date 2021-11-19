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
