function halvsies(origArr) {
  const arr = origArr.slice();

  const left = arr.splice(0, (arr.length / 2) + 1);
  const right = arr;

  return [left, right];
}

console.log(
  halvsies([1, 2, 3, 4]), // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]), // [[1, 5, 2], [4, 3]]
  halvsies([5]), // [[5], []]
  halvsies([]), // [[], []]
);
