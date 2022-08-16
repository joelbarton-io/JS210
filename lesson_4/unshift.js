const unshift = (arr, val) => {
  let newArr = [val];

  for (let index = 0; index <= arr.length - 1; index++) {
    newArr[index + 1] = arr[index];
  }
  newArr.length;
}

unshift([1, 2, 3], 0);