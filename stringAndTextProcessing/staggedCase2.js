function staggeredCase(str) {
  let toggle = false;

  return str.split('').map((chr) => {
    let ret = chr;
    toggle = !toggle;

    if (/[a-z]/i.test(chr)) {
      ret = toggle ? chr.toUpperCase() : chr.toLowerCase();
    }

    return ret;
  }).join('');
}

console.log(
  staggeredCase('I Love Launch School!'), // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL CAPS'), // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers'), // "IgNoRe 77 ThE 4444 nUmBeRs"
);
