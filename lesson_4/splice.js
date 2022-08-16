const splice = (arr, start, removeCount) => {
  let lastIndex = arr.length - 1 - start;
  let index = 0;
  let newArr = [];

  while (index < start) {
    newArr.push(arr.shift());
    index += 1;
  }

  let mutatedArrayLength = arr.length - 1;

  for (let idx = lastIndex; idx <= mutatedArrayLength; idx++) {
    newArr.push(arr.pop())
  }

  return newArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr = splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
newarr
count;                                 // [ 1, 2, 8 ]