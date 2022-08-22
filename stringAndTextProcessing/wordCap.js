function wordCap(sentence) {
  const WORDS = sentence.split(' ');

  return WORDS.map((word) => {
    if (word[0].match(/[a-z]/i)) {
      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  }).join(' ');
}

console.log(
  wordCap('four score and seven'), // "Four Score And Seven"
  wordCap('the javaScript language'), // "The Javascript Language"
  wordCap('this is a "quoted" word'), // 'This Is A "quoted" Word'
);
