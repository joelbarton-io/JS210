function sequence(count, start) {
  if (count === 0) return [];
  const RESULT = [];

  for (let idx = 1; idx <= count; idx += 1) {
    RESULT.push(start * idx);
  }

  return RESULT;
}
console.log(

  sequence(5, 1),
  sequence(4, -7),
  sequence(3, 0),
  sequence(0, 1000000),

);
