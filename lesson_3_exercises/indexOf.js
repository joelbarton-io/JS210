function indexOf(full, fragment) {
  let fragLeng = fragment.length;

  for (let index = 0; index < full.length; index++) {
    if (full.substring(index, index + fragLeng) === fragment) {
      return index;
    }
  }
  return -1;
}
console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));