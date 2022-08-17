// const myObject = {
//   // prop1: '123',
//   prop2: '456',
//   // 'prop 3': '345',
//   '456': '678',
// };

// const prop2 = '456';
// myObject['prop2'] = '456'; // update 'prop2''s value
// myObject[prop2] = '678'; // creates k-v pair in object

// console.log(myObject[prop2]); // > 678
// console.log(myObject.prop2); // > 456


// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);


// const myArray = ['a', 'b', 'c'];

// console.log(myArray[0]); // > 'a'
// console.log(myArray[-1]); // > undefined

// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f'; // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]

// console.log(myArray[-1]); // > 'd' || '-1': 'd'
// console.log(myArray['e']); // > 5
// console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]





// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5]

// function average(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) { // iterate 4 times
//     sum += array[i];
//   }

//   return sum / array.length; // 20 / 2 = 10
// }

// console.log(average(myArray));







// function calculateBonus(...args) {
//   return args[1] ? args[0] / 2 : 0; // alternatively: use actual arguments object
// }

// console.log(calculateBonus(2800, true));               // 1400
// console.log(calculateBonus(1000, false));              // 0
// console.log(calculateBonus(50000, true));              // 25000




// function penultimate(string) {
//   let arr = string.split(' ')
//   return console.log(arr[arr.length - 2]);
// }

// penultimate('last word');                    // expected: "last"
// penultimate('Launch School is great!');      // expected: "is"