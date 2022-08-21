function swapName(str) {
  const arr = str.split(' ');
  return arr.reverse().join(', ');
}

console.log(swapName('Joe Roberts')); // "Roberts, Joe"
