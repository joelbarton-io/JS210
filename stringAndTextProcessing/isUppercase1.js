// console.log('T'.charCodeAt(0)); // 116 ('t') 84 ('T') DIFF = 32;

function isUppercase(str) {
  return !str.match(/[a-z]/);
}

console.log(

  isUppercase('t'),
  isUppercase('T'),
  isUppercase('Four Score'),
  isUppercase('FOUR SCORE'),
  isUppercase('4SCORE!'),
  isUppercase(''),

);
