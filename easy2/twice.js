// is double-double -> must be even, must have left side === right side

// if double-double -> return input;
// otherwise -> multiply by 2;

function twice(n) {
  let left = String(n).substring(0, String(n).length / 2);
  let right = String(n).substring(String(n).length / 2);

  if (String(n).length % 2 === 1) {
    return console.log(n * 2);
  }
  if (left === right) {
    return console.log(n);
  }
  return console.log(n * 2);
}
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676