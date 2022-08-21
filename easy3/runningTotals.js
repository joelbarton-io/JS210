function runningTotal(arr) {
  let curr;
  let prev;
  let newVal;
  const newArr = arr.slice();

  for (let index = 1; (index < arr.length); index += 1) {
    curr = newArr[index];
    prev = newArr[index - 1];
    newVal = curr + prev;
    newArr.splice(index, 1, newVal);
  }

  return newArr;
}

console.log(
  runningTotal([2, 5, 13]), // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]), // [14, 25, 32, 47, 67]
  runningTotal([3]), // [3]
  runningTotal([]), // []
);
