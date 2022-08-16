const join = (arr, str) => {
  let constructedString = '';

  for (let index = 0; index < arr.length; index++) {
    constructedString += String(arr[index]);
    if (index < arr.length - 1) constructedString += str;
  }
  return console.log(constructedString);
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');