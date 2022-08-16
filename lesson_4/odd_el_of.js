function oddElementsOf(arr) {
  let newArr = [];

  for (let el in arr) {
    if (el % 2 === 1) newArr.push(arr[el]);
  }
  return console.log(newArr);
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]