function wordToDigit(str) {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const arr = str.split(' ');
  let random = '';
  return arr.map((word) => {
    if (word[word.length - 1] === '.') {
      random = word.slice(word.length - 1);
      return String(NUMBERS[word.slice(0, word.length - 1)]) + random;
    }
    if (NUMBERS[word]) {
      return String(NUMBERS[word]) + random;
    }
    return word + random;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
