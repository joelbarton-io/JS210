function negative(number) {
  // return Math.abs(number) * -1;
  return (number < 0) ? number : number * -1;
}
console.log(
  negative(5), // -5
  negative(-3), // -3
  negative(0), // -0

);
