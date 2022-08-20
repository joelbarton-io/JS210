'use strict'

function test() {
  const denom = 3;
  return (numer) => numer / denom;
}

const divByThree = test();

console.log(
  divByThree(9),
);
