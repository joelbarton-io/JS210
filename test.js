// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

// iterate from 1 upto and including argument
// each number must appear on its own line

function allOdd(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

allOdd(11)