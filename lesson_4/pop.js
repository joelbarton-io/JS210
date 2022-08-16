const pop = (arr) => {
  if (arr.length === 0) return undefined;

  let val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
};

let count = [1, 2, 3];
pop(count, 2);
console.log(count)