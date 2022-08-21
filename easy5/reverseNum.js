function reverseNumber(number) {
  const numberStringArray = String(number).split('');
  return parseInt(numberStringArray.reverse().join(''), 10);
}