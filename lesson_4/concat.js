const concat = (arr1, arr2) => {
  let newArr = [];

  for (let value of arr1.values()) {
    newArr.push(value);
  }

  for (let value of arr2.values()) {
    newArr.push(value);
  }
  return console.log(newArr);
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]
