function stringToInteger(str) {

  let multiplier = 1;
  let result = 0;
  let numAsString;
  let toAdd;

  for (let i = str.length - 1; i >= 0 ; i--) {
    numAsString = str[i];

    for (let num = 0; num < 10; num++) {
      if (numAsString === `${num}`) {
        toAdd = num * multiplier;
        break;
      }
    }

    result += toAdd;
    multiplier *= 10;
  }

  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570