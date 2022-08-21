// split string into 'words'
// for each word (el)
// get length of that word
// check if our result object has a property of that length as a string
// if it does, increment the value of that property by 1;
// otherwise, populate object with the k-v pair of the length-as-string = 1;

function wordSizes(str) {
  const result = {};
  if (str.length === 0) return result;

  const arr = str.split(' ');
  let leng;
  let currLengths;

  arr.forEach((el) => {
    leng = el.length;
    currLengths = Object.keys(result);

    if (currLengths === undefined) {
      result[String(leng)] = 1;
      return;
    }

    if (currLengths.includes(String(leng))) {
      result[String(leng)] += 1;
    } else {
      result[String(leng)] = 1;
    }
  });

  return result;
}

console.log(
  wordSizes('Four score and seven.'), // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'), // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?"), // { "2": 1, "4": 1, "6": 1 }
  wordSizes(''), // {}
);
