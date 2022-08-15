// console.log('  ab c  '[1]);

function trim(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  if (string.length === 0) {
    console.log('hasdfh')
    return ''
  }

  while (string[leftIndex] === ' ') {
    leftIndex += 1;
  }

  if (leftIndex > string.length - 1) {
    console.log('empty string');
    return ''
  }

  while (string[rightIndex] === ' ') {
    rightIndex -= 1;
  }

  console.log(string.substring(leftIndex, rightIndex + 1));
  console.log(string.substring(leftIndex, rightIndex + 1).length);
}
// trim('  abc  ');  // "abc"
// trim('abc   ');   // "abc"
// trim(' ab c');    // "ab c"
// trim(' a b  c');  // "a b  c"
// trim('      ');   // ""
trim('');         // ""