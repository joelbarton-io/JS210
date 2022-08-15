function splitString(string, delim) {
  if (delim === undefined) {
    console.log("ERROR: no delimiter");
    return;
  }

  let temp = '';
  for (let index = 0; index <= string.length; index++) {
    if (delim === '') {
      console.log(string[index]);
      continue;
    }

    if (string[index] === delim || string[index] === undefined) {
      console.log(temp);
      temp = ''
      continue;
    }
    temp += string[index];
  }
}
splitString('abc,123,hello world', ',');
// splitString('hello');
// splitString('hello', '');
// splitString('hello', ';');
// splitString(';hello;', ';');