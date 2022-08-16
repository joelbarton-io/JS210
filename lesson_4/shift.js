const shift = (arr) => {
  let result = arr[0]

  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index + 1];
  }
  arr.length = arr.length - 1;
  return result;
}

let myarr = [1, 2, 3]
console.log(shift(myarr))

console.log(myarr)