function swapCase(str) {
  return str.split('').map((chr) => {
    if (chr.match(/[a-z]/i)) {
      return (/[A-Z]/.test(chr)) ? chr.toLowerCase() : chr.toUpperCase();
    }
    return chr;
  }).join('');
}

console.log(
  swapCase('CamelCase'), // "cAMELcASE"
  swapCase('Tonight on XYZ-TV'), // "tONIGHT ON xyz-tv"
);
