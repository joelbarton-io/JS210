// if second arg is emtpy
// if second arg length > first arg length
// ???

// traverse second arg length
// compare char at index for each
// if all match return true
// else return false


function startsWith(string, search) {
  if (search.length === 0) {
    console.log(true);
    return true;
  }
  if (search.length > string.length) {
    console.log(false);
    return false;
  }

  for (let index = 0; index < search.length; index++) {
    if (!(string[index] === search[index])) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

let str = 'We put comprehension and mastery above all else';
// startsWith(str, 'We');              // true
// startsWith(str, 'We put');          // true
// startsWith(str, '');                // true
// startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false