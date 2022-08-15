function century(year) {
  let centNum = Math.ceil(year / 100);
  let suffix = 'th';
  if (centNum % 10 === 1 && centNum % 100 !== 11) suffix = 'st';
  if (centNum % 10 === 2 && centNum % 100 !== 12) suffix = 'nd';
  if (centNum % 10 === 3 && centNum % 100 !== 13) suffix = 'rd';
  return `${centNum}${suffix}`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"