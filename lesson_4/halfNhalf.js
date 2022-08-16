const meth = (arr) => {
  let half = [];
  for (let el of arr) {
    half.unshift(el);
  }
  let result = arr.slice()
  result.push(...half);
  return console.log(result);
}

arr = [1, 2, 3, 4];
meth(arr);
console.log(arr)