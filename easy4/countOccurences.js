function countOccurrences(arr) {
  const items = {};

  arr.forEach((item) => {
    if (items[item]) {
      items[item] += 1;
    } else {
      items[item] = 1;
    }
  });

  const asArr = Object.entries(items);

  asArr.forEach((el) => console.log(`${el[0]} => ${el[1]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
