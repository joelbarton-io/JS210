// always non-zero length string
// no leading/trailing spaces or repeated spaces
// -> use split(' ');

// split string by spaces
// for each array element
// set temp = first;
// set first = last;
// set last = temp;

// next word
// return array as string;

function swap(str) {
  let temp;
  let first;
  let last;
  const arr = str.split(' ');

  return arr.map((el) => {
    if (el.length === 1) return el;
    temp = el[0];
    first = el[el.length - 1];
    last = temp;
    return [first, el.slice(1, el.length - 1), last].join('');
  }).join(' ');
}

console.log(
  swap('Oh what a wonderful day it is'), // "hO thaw a londerfuw yad ti si"
  swap('Abcde'), // "ebcdA"
  swap('a'), // "a"
);
