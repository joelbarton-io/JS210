const lastIndexOf = (arr, val) => {
  let lastSeen = undefined;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === val) lastSeen = index;
  }

  if (lastSeen) return lastSeen;
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));
console.log(lastIndexOf([1, 2, 3], 4));