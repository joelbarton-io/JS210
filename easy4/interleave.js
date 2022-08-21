function interleave(arr1, arr2) {
  const result = [];
  arr1.forEach((el, idx) => result.push(el, arr2[idx]));
  return result;
}

console.log(
  interleave([1, 2, 3], ['a', 'b', 'c']), // [1, "a", 2, "b", 3, "c"]
);
