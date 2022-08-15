function fizzBuzz() {
  for (let index = 1; index <= 100; index++) {
    let message;
    if (index % 3 === 0 && index % 5 === 0) {
      message = 'FizzBuzz'
    } else if (index % 3 === 0) {
      message = 'Fizz'
    } else if (index % 5 === 0) {
      message = 'Buzz'
    } else {
      message = index
    }
    console.log(message)
  }
}

fizzBuzz()