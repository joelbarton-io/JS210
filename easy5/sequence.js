function sequence(last) {
  const ARR = [];

  for (let curr = 1; curr <= last; curr += 1) {
    ARR.push(curr);
  }
  return ARR;
}
console.log(
  sequence(5),
  sequence(3),
  sequence(1),
);
