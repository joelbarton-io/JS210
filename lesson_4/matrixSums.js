const array1 = [1, 2, 3, 4];

function matrixSums(arrays) {
  let newArr = arrays.map(arr => arr.reduce((a, b) => a + b));
  return console.log(newArr);
}


matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]