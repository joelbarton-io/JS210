function doubleConsonants(str) {
  let result = '';
  const ARR = str.split('');

  ARR.forEach((element) => {
    if (element.match(/[^aeiou!-]/)) {
      result += element + element;
    } else {
      result += element;
    }
  });

  return result;
}

console.log(
  doubleConsonants('String'), // "SSttrrinngg"
  doubleConsonants('Hello-World!'), // "HHellllo-WWorrlldd!"
  doubleConsonants('July 4th'), // "JJullyy 4tthh"
  doubleConsonants(''), // ""
);
