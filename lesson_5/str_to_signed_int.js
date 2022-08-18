function parseSign(dirtyStr) {
  let n = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let firstChr = dirtyStr[0];
  let cleanStr = '';

  if (firstChr === '+') {
    cleanStr = dirtyStr.split('').slice(1).join('');
    return [cleanStr];
  } else if (n.includes(firstChr)) {
    return [dirtyStr]
  } else {
    cleanStr = dirtyStr.split('').slice(1).join('');
    return [cleanStr, '-'];
  }
}

function stringToSignedInteger(str) {
  let multiplier = 1;
  let result = 0;
  let numAsString;
  let toAdd;
  let unsignedString = parseSign(str);
  let sign;
  if (unsignedString.length > 1) sign = unsignedString.pop();

  unsignedString = unsignedString.join();

  for (let i = unsignedString.length - 1; i >= 0 ; i--) {
    numAsString = unsignedString[i];

    for (let num = 0; num < 10; num++) {
      if (numAsString === `${num}`) {
        toAdd = num * multiplier;
        break;
      }
    }
    result += toAdd;
    multiplier *= 10;
  }

  if (sign) result *= -1
  return result;
}

stringToSignedInteger('4321');      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

