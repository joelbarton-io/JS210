// got bored; DNF

function reverseWords(str) {
  const RESULT = str.split(' ').reverse();
  return RESULT.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}

console.log(

  // reverseWords('Professional'),
  reverseWords('Walk around the block'),
  // reverseWords('Launch School'),

);
