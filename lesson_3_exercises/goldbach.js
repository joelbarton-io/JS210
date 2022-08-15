function isPrime(n) {
  for (let candidate = 2; candidate < n; candidate++) {
    if (n % candidate === 0) {
      return false;
    }
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    return null;
  }
  const pairs = [];
  for (let i = 2; i <= (expectedSum/2); i++) {
    let j = expectedSum - i
    pairs.push([i, j])
  }

  let result = pairs.filter(el => isPrime(el[0]) && isPrime(el[1]));

  result.forEach((pr) => console.log(String(pr[0] + ' ' + pr[1])));
}
