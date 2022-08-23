// move first to the end
// first never moves from here on out

// covernt to string
// slice(0) >> add to result string until empty
// return string as number

function maxRotation(num) {
  const arr = String(num).split('');
  let result = '';
  let tempFirst = '';

  while (arr.length > 0) {
    [tempFirst] = [arr.splice(0, 1)]; // eslint suggest array destructuring here
    arr.push(tempFirst);
    result += arr.splice(0, 1);
  }

  return Number(result);
}

console.log(
  maxRotation(735291), // 321579
  maxRotation(3), // 3
  maxRotation(35), // 53
  maxRotation(105), // 15 -- the leading zero gets dropped
  maxRotation(8703529146), // 7321609845
);
