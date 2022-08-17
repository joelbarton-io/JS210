function parseSign(dirtyStr) {
  let n = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let firstChr = dirtyStr[0];
  let cleanStr = '';

  if (firstChr === '+') {
    cleanStr = dirtyStr.split('').slice(1).join('');
  } else if (n.includes(firstChr)) {

  } else {

  }
}

function stringToSignedInteger(str) {

  // let str = ;
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

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100


// let arr = [];
// arr.length = 10;


// arr.forEach((el) => {
//   console.log(el);
// })

