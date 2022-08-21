function multiplyList(arr, arr2) {
  return arr.map((el, idx) => el * arr2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77])
