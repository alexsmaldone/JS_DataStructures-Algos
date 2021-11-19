/*
- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the elmeent in the correct place
- repeat until array is sorted
*/

function swap(arr, indx1, indx2) {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while ((j > -1) && (currentVal < arr[j])) {
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] = currentVal;
}
return arr;
}

let arr1 = [4, 1, 6, 7, 2, 9, 3, 20, 12];

console.log(insertionSort(arr1));
