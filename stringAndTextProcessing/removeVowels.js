function removeVowels(arr) {
  return arr.map((elem) => elem.replace(/[aeiou]/gi, ''));
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),
  removeVowels(['green', 'YELLOW', 'black', 'white']),
  removeVowels(['ABC', 'AEIOU', 'XYZ']),
);
