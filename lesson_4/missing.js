function missing(arr) {
  let current = arr[0];
  let max = arr[arr.length - 1];
  let missed = [];
  let index = 0;

  while (current < max) {
    if (current === arr[index]) {
      index += 1;
      current += 1;
    } else {
      missed.push(current);
      current += 1;
    }
  }

  return console.log(missed)
}


missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);