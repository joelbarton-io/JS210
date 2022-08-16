function uniqueElements(arr) {
  let newArr = [];

  for (let el of arr) {
    if (newArr.includes(el)) continue;
    newArr.push(el);
  }

  return console.log(newArr);
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]