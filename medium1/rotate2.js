// move nth digit starting from right of number as string (or array);

// make string
// convert to array

// splice value at length - n
// push this value to the end
// convert back to number
// return;

function rotateRightmostDigits(numbers, n) {
  const ARR = String(numbers).split(''); // > I wanted to use splice
  const LAST = ARR.splice(ARR.length - n, 1).join('');
  return Number(ARR.join('') + LAST);
}

console.log(
  rotateRightmostDigits(735291, 1) === 735291,
  rotateRightmostDigits(735291, 2) === 735219,
  rotateRightmostDigits(735291, 3) === 735912,
  rotateRightmostDigits(735291, 4) === 732915,
  rotateRightmostDigits(735291, 5) === 752913,
  rotateRightmostDigits(735291, 6) === 352917,
);
