/*
Pivot Helper
- given an array, this helper function should designate an element as the pivot
- it should then rearrange elements in the array so that all values less than the pivot are moved to th eleft of the pivot,
  and all values greater than the pivot are moved to the right of hte pivot
- the order of elements on either side of the pivot doesn't matter
- THe helper should do this in place, that is, not create a new array
- when complete, the helper should return the index of the pivot spot
Picking a Pivot
- runtime of quick sort depends in part on how one selects the pivot
- ideally, the pivot should be chosen so that it's roughly the median value in the data you're sorting
- for simplicity, we'll always choose to pivot the first element
*/

/*
Pivot PseudoCode
- will help to accept three arguments: (array, start index, end index)
- grab pivot from start of array
- store current pivot index in a variable (will keep track of where pivot should end up)
- loop through array from start until end
  - if pivot is greater than current element, icnrement the pivot index variable and then swap the current element with the element
    at the pivot index
- swap starting element (pivot) with the pivot index
- return pivot index
*/

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
  }
  swap(arr, start, swapIndx);
  return swapIndx;
}

/*
QuickSort PseudoCode
- call pivot helper on array
- when helper returns updated pivot index, recursively call the pivot helper on the subarray to the left of that index,
  and the subarray to the right of that index
- your base case occurs when you consider a subarray with less than 2 elements
*/

// QUICKSORT FUNCTION
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
