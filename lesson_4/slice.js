const slice = (arr, start, end) => {
  let newArr = [];
  let count = 0;
  for (let index = start; index < end; index++) {
    newArr[count] = arr[index];
    count += 1;
  }
  return console.log(newArr);
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]