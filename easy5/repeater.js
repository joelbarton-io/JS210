function repeater(str) {
  let result = '';
  const arr = str.split('');

  arr.forEach((element) => {
    result += element + element;
  });
  return result;
}

console.log(
  repeater('Hello'), // "HHeelllloo"
  repeater('Good job!'), // "GGoooodd  jjoobb!!"
  repeater(''), // ""
);
