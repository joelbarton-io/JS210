function generatePattern(n) {

  for (let lineNumber = 1; lineNumber <= n; lineNumber++) {
    let str = '';

    for (let digit = 1; digit <= lineNumber; digit++) {
      str += String(digit);
    }
    // str += '*'.repeat(n - lineNumber);
    for (let count = lineNumber + 1; count <= n; count++) {
      str += '*';
    }
    console.log(str);
  }
}

generatePattern(7);