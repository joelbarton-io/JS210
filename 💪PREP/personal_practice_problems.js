// _Closure:general_

// function test() {
//   const denom = 3;
//   const hi = 'hi';

//   return function myFn(numer) {
//     // numer = 8;
//     return (numer / denom);
//   };
// }

// const divByThree = test();

// console.log(
//   divByThree(9),
// );

// _Closure:w/ reassignment_

// function test() {
//   let denom = 3;

//   return function myFn(numer) {
//     denom = 5;
//     return (numer / denom);
//   };
// }

// const divByThree = test();

// console.log(
//   divByThree(9),
// );

// _Closure: hard

// function test() {
//   const denom = 3;

//   return function myFn(param) {
//     // denom = 5;
//     return ((param * operand) / denom);
//   };
// }
// denom = 30;

// const operand = 5;
// const divByThree = test();

// console.log(
//   divByThree(9),
// );

// _re:Hoisting_

// for (let index = 0; index < 5; index += 1) {
//   console.log(index);
// }

// _re:Hoisting sans function invocation_

// function myFn(param) {
//   return param;
// }
// const localVar = 'hi';
// myFn(localVar);

// _re:partial function application
// let theName = 'Victor';

// function makeDoubler(caller) {
//   return (number) => {
//     console.log(`This function was called by ${caller}.`);
//     return number + number;
//   };
// }

// const doubler = makeDoubler(theName);
// theName = 'James';
// console.log(doubler(5));

// var qux = 2;

// function foo() {
//   var qux = 1; // variable shadowing

//   function bar() {
//     console.log(qux); //> 1
//     foobar();  //> 2
//   }

//   bar();
// }

// function foobar() {
//   console.log(qux);
// }

// foo();

// _re:arrays and objects and lengths

// const arr = [1, 2, 3];
// console.log(typeof arr); //> 'object'
// arr[6] = 6;
// arr[7] = 7;
// console.log(arr); //> [1, 2, 3, <3 empty items>, 6]
// console.log(arr[5]) //> undefined
// arr[-1] = 'hello there';
// console.log(arr); //> [1, 2, 3, <3 empty items>, 6, 7, '-1': 'hello there]
// console.log(arr.length) //> 7
// console.log(Object.values(arr)) //>
// console.log(arr['hello goodbye']) //> undefined
// arr.length = 100;
// console.log(arr) //> [1, 2, 3, <3 empty items>, 6, 7, '-1': 'hello there', <90 mepty values]
// arr.length = 3;
// console.log(Object.keys(arr).length); //> [1, 2, 3, '-1': hello there]

// _re:arrays and length + properties vs elements

// const arr = [1, 2, 3];
// arr[-1] = 'hello';

// const otherArr = Object.create(arr);

// console.log(
//   arr,
//   otherArr,
//   Array.isArray(arr),
//   Array.isArray(otherArr),
//   otherArr[-1],
// );

// console.log(
//   arr, // [ 1, 2, 3, '-1': 'hello' ]
//   otherArr, // Array {}
//   Array.isArray(arr), // true
//   Array.isArray(otherArr), // false
//   otherArr[-1], // 'hello'
// );


