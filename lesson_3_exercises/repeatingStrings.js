// guard: if "times" is negative or NaN -> undefined;
// guard: if "times" is zero -> '';

// n times, append string to itself;

// return aggregate string;

function repeat(string, times) {
  if (typeof(times) !== 'integer' || times < 0) {
    console.log(undefined);
    return;
  } else if (times === 0) {
    console.log('')
    return;
  }
  let aggString = '';
  for (let count = 0; count < times; count++) {
    aggString += string;
  }
  console.log(aggString);
  return;
}

// repeat('abc', 1);       // "abc"
// repeat('abc', 2);       // "abcabc"
// repeat('abc', -1);      // undefined
// repeat('abc', 0);       // ""
// repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined