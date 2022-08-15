// starting index, if negative -> take string length - start index value;

// length includes all available characters in range; if string[index] === undefined, end and return

function substr(string, start, length) {
  let constructed = '';
  if (start < 0) { start = string.length + start };

  for (let index = start; index < start + length; index++) {
    if (string[index] === undefined) {
      console.log(constructed);
      return;
    }
    constructed += string[index];
  }
  console.log(constructed);
}

let string = 'hello world';

// substr(string, 2, 4);      // "llo "
// substr(string, -3, 2);     // "rl"
// substr(string, 8, 20);     // "rld"
// substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""