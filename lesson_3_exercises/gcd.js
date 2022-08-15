function gcd(num1, num2) {
  let start = Math.min(num1, num2);
  let candidates = [];
  for (let divisor = start; divisor > 0; divisor--) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      candidates.push(divisor)
    }
  }
  return Math.max(...candidates);
}

console.log(gcd(4, 12));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1