// function slice(array, begin, cutOff) {
//   if (begin > array.length) begin = array.length;
//   if (cutOff > array.length) cutOff = array.length;

//   let result = [];
//   for (let index = begin; index < cutOff; index++) {
//     result.push(array[index]);
//   }
//   return console.log(result);
// }

// slice([1, 2, 3], 1, 2);               // [2]
// slice([1, 2, 3], 2, 0);               // []
// slice([1, 2, 3], 5, 1);               // []
// slice([1, 2, 3], 0, 5);               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// slice(arr1, 1, 3);                     // [2, 3]
// arr1;                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  let lastIndex = array.length - 1

  if (deleteCount === 0) return console.log([]);
  if (start >= lastIndex) start = lastIndex;
  if (deleteCount > (lastIndex - start)) deleteCount = (lastIndex - start);

  let tail = [];
  let cutOff = start + deleteCount;

  if (cutOff < lastIndex) {
    for (let index = lastIndex; index >= cutOff; index--) {
      tail.push(array.pop())
    }
  }

  let result = [];

  for (let index = start; index <= lastIndex; index++) {
    if (array[index] === undefined) break ;
    result.push(array.pop());
  }

  array.push(...elements)
  array.push(...tail);
  return console.log(result.reverse());
}


splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
// splice([1, 2, 3], 1, 0, 'a');         // []

// const arr2 = [1, 2, 3];
// splice(arr2, 1, 1, 'two');             // [2]
// arr2;                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// arr3;                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]