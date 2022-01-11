function recursiveBinarySearch(n, arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  if (n === arr[mid]) {
    return true;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}

console.log(recursiveBinarySearch(2, [1, 2, 3, 4, 5])); // true
console.log(recursiveBinarySearch(3, [1, 2, 3, 4, 5])); // true
console.log(recursiveBinarySearch(5, [1, 2, 3, 4, 5])); // true
console.log(recursiveBinarySearch(6, [1, 2, 3, 4, 5])); // false
