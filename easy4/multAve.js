function showMultiplicativeAverage(arr) {
  const COUNT = arr.length;
  const VALUE = arr.reduce((a, b) => a * b, 1) / COUNT;
  return VALUE.toFixed(3);
}

console.log(
  showMultiplicativeAverage([3, 5]), // "7.500"
  showMultiplicativeAverage([2, 5, 7, 11, 13, 17]), // "28361.667"
);
