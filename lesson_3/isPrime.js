// a prime number is a number that is only divisible by 1 and itself

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let candidate = 2; candidate < n; candidate++) {
    if (n % candidate === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));