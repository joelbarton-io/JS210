function centerOf(str) {
  const TAKE = (str.length % 2 === 0) ? 2 : 1;
  let start;

  if (TAKE === 2) {
    start = (str.length / 2) - 1;
  } else {
    start = (str.length / 2);
  }
  return str.split('').splice(start, TAKE).join('');
}

console.log(
  centerOf('I Love JavaScript'), // "a"
  centerOf('Launch School'), // " "
  centerOf('Launch'), // "un"
  centerOf('Launchschool'), // "hs"
  centerOf('x'), // "x"
);
