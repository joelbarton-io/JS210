function union(...arrs) {
  const arr = [];

  arrs.flat().forEach((elem) => {
    if (!arr.includes(elem)) arr.push(elem);
  });

  return arr;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9])

// function union(...arrs) {
//   return Array.from(new Set([...arrs.flat()]));
// }
