function concat(arr, ...arg) {
  let newArr = arr.slice();

  for (let el of arg) {
    if (Array.isArray(el)) {
      newArr.push(...el);
      continue;
    }
    newArr.push(el);
    }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]