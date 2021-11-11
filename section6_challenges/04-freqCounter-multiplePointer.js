/*
Implement a function called areThereDuplicates which accepts a variable number
of arguments and checks whether there are any duplicates among the arguments
passed in. You can solve this using the frequency pattern OR
the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  //FREQUENCY SOLUTION
  // let collection = {};
  // for (let val in args) {
  //   if (collection[args[val]]) collection[args[val]] += 1;
  //   if (!collection[args[val]]) collection[args[val]] = 1;
  // }

  // for (let key in collection) {
  //   if (collection[key] > 1) return true;
  // }
  // return false;

  //Multiple-pointers Solution
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++
    next++
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
