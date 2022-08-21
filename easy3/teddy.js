function getRandom(min, max) {
  let num;

  do {
    num = Math.round(Math.random() * max);
  } while (num <= min);

  return num;
}
