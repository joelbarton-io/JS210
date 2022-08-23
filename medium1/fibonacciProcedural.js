function fibonacci(n) {
  let [result, n1, n2, next] = [0, 1, 1];

  for (let count = 2; count < n - 2; count += 1) {
    next = n1 + n2;
    [n1, n2] = [n2, next];
    result += next;
  }
  return result;
}

console.log(

  fibonacci(20), // 6765
  fibonacci(50), // 12586269025
  fibonacci(75), // 2111485077978050

);
