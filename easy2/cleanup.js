// construct alphabet
// iterate thru dirty string
// append characters as needed
  // if alphabetical -> add it to clean string;
  // if non-alphabetical, add one space to buffer, unless the next character is also non alphabetical or undefined;
// return clean;
function alphabeticalChar(char) {
  if (char === undefined) return false;
  let code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function cleanUp(dirty) {
  let clean = '';
  let buffer = '';

  for (let index = 0; index < dirty.length; index++) {
    if (alphabeticalChar(dirty[index])) {
      clean += dirty[index];
      continue;
    }
    if (buffer && (alphabeticalChar(dirty[index + 1]))) {
      clean += buffer;
      buffer = '';
    }
    buffer = ' ';
  }
  return console.log(clean);
}

cleanUp("---what's my +*& line?");    // " what s my line "