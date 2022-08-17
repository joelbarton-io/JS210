function repeatedCharacters(str) {
  str = str.toLowerCase();
  let unfiltered = {};

  for (let i = 0; i < str.length; i++){
    if (!unfiltered[str[i]]) unfiltered[str[i]] = 1;
    else unfiltered[str[i]] += 1
  }

  let result = {};

  for (let key in unfiltered) {
    if (unfiltered[key] > 1) result[key] = unfiltered[key];
  }

  return console.log(result);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

