/*
write a function called averagePair. Given a sorted array of integers and a
target average, determine if there is a pair of values in the array where
the average of the pair equals the target average. There may be more than one
pair that matches the average target.
*/

function averagePair(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;
  while (start < sortedArr.length - 1) {
    if ((sortedArr[start] + sortedArr[end]) / 2 === target) {
      return true;
    }
    if ((sortedArr[start] + sortedArr[end]) / 2 > target) {
      end--;
    }
    if ((sortedArr[start] + sortedArr[end]) / 2 < target) {
      start++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
