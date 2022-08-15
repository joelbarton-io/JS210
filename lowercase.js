let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

// fetch ascii numeric charCodeAt(index)
// add 32;
// convert number back to char fromCharCode(numeric);

function toLowerCase(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    let letter = string[index];
    let asciiNumeric = letter.charCodeAt(0) + 32;
    let newChar = String.fromCharCode(asciiNumeric);
    if (newChar === letter) {

    }
  }
  console.log(result);
  return result;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"