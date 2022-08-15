function lastIndexOf(full, frag) {
  let curr;
  for (let index = 0; index < full.length; index++) {
    if (full.substring(index, index + frag.length) === frag) {
      curr = index;
    }
  }
  return curr ? curr : -1;
}
console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));