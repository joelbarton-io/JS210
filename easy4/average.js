function average(arr) {
  const COUNT = arr.length;

  return Math.floor((arr.reduce((prev, curr) => prev + curr, 0) / COUNT));
}

console.log(
  average([1, 5, 87, 45, 8, 8]), // 25
  average([9, 47, 23, 95, 16, 52]), // 40
);
