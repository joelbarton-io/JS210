const logMultiples = (number) => {
  let multiples = [];

  for (let multiplier = 1; multiplier <= 100; multiplier++) {
    let product = number * multiplier;
    if ((product < 100) && (product % 2 === 1)) {
      multiples.push(product)
    }
  }
  multiples.reverse

  multiples.forEach((elem) => {
    console.log(elem);
  });
}

function improved(n) {
  const max = Math.floor(100/n) * n

  for (let number = max; number >= 1; number -= n) {
    if (number % 2 === 1 && number % n === 0) {
      console.log(number);
    }
  }
}

improved(17)