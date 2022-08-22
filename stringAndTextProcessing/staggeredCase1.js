// declare a toggle variable;
// traverse each element of the str as arr elements;
//
// if curr chr is NaN
// if curr chr is alphabetical
//  depending on toggle; upp or lower and flip toggle;
// if curr chr is non-alphabetical
//  flip toggle, return curr chr

// if numeric, continue without changing anything or incrementing anything;
// just return chr without changing toggle value;

// return;

function staggeredCase(str) {
  let toggle = true;

  return str.split('').map((chr) => {
    let ret = chr;

    if (/[a-z]/i.test(chr)) {
      ret = toggle ? chr.toUpperCase() : chr.toLowerCase();
      toggle = !toggle;
    } else {
      toggle = !toggle;
    }

    return ret;
  }).join('');
}

console.log(
  staggeredCase('I Love Launch School!'), // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS'), // "AlL_CaPs"
  staggeredCase('ignore 77 the 4444 numbers'), // "IgNoRe 77 ThE 4444 nUmBeRs"
);
