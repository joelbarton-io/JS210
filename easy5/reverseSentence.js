function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(

  reverseSentence(''),
  reverseSentence('Hello World'),
  reverseSentence('Reverse these words'),

);
