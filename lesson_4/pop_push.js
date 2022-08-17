function pop(arr) {
  if (arr.length === 0) return undefined;

  let result = arr[arr.length - 1];
  arr.length -= 1;
  return result;
}
// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

function push(arr, ...args) {

  let nextIndex = arr.length;
  let maximumIndex = nextIndex + args.length;
  let start = 0;

  for (let index = nextIndex; index < maximumIndex; index++) {
    arr[index] = args[start];
    start += 1;
  }

  return console.log(arr.length);
}

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0