// _Closure:general_

// const globalVariable = 'I\'m global';

// function main() { // -> { globalVariable }
//   const otherVar = 'hello';

//   function fnGenerator() { // -> { otherVar }
//     const denom = 3;

//     function returnedFn(numer) { // -> { denom }
//       // console.log(otherVar);
//       return (numer / denom);
//     }
//     return returnedFn;
//   }

//   const divByThree = fnGenerator();

//   console.log(
//     divByThree(9),
//   );
// }

// main();

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

// _re:object destructuring
// function xyzzy(foo, bar, qux) {
//   return {
//     foo,
//     bar,
//     answer: qux,
//   };
// }

// const myObj = xyzzy('a', 'b', 'c');

// console.log(myObj);

// const { foo, bar, qux } = myObj;

// console.log(
//   foo,
//   bar,
//   qux,
// )

// _re:Arrays as objects

// const arr = [1];

// arr['0'] = 'zero';
// arr[-1] = 1;
// arr['5'] = 'five';
// arr[10] = undefined;

// console.log(
//   arr,
//   arr.length,
//   Object.values(arr).length,
//   Object.keys(arr),
//   typeof arr[3],
// );

// _re:manipulating length of array

// const arr = [];

// arr['-1'] = 'negative 1';
// arr[0] = 'zero';
// arr[1] = 'one';

// arr.length = -1;
// console.log(arr);

// re:forin_forof ricky's example

// const myName = 'Joel';
// console.log(myName); // => 'Joel'
// const myNameAry = ['J', 'o', 'e', 'l'];
// const myNameObj = {
//   J: 'J',
//   o: 'o',
//   e: 'e',
//   l: 'l',
// };

// for (let i = 0; i < myName.length; i++)
// for k in // => use in all Strings, Arrays, and Objects
// for v of // => use in Strings and Arrays, can't use in simple Objects
// for (let char of myName) {
//   console.log(char);
// }

// for (let elt of myNameAry) {
//   console.log(elt);
// }

// Remember your fork
// for (let key in myNameObj) {
//   console.log(myNameObj[key]);
// }
// let a
// let baby = Object.create(myNameObj);
// baby['joel'] = 'hello';

// for (let key in baby) {
//   if (baby.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(Object.keys(baby)) // baby's own keys

// _re: expressions vs declarations

// function fnGenerator() {
//   const denom = 3;

//   function returnedFn(numer) {
//     return (numer / denom);
//   }
//   return returnedFn;
// }

// const divByThree = fnGenerator();

// console.log(
//   divByThree(9),
// );

// _re:switch statements

// switch (Array.isArray(arr)) {
//   case (true):
//     console.log(1);
//   case (false):
//     console.log(2);
//   case (true):
//     console.log(3);
//   default:
//     console.log('default');
// }

// _re:expressions

// let b;

// console.log(
//   () => 'a',
//   function c() { return 'c' },
//   b = () => 'b',
//   b(),
// );

// _re:immediately invoked function

// (function myFn(...args) {
//   console.log(args.map((el, idx) => el * idx));
// }(1, 2, 3, 4, 5));

// _re:conditionals and declaration
// let a;

// if (a = 1) {
//   a = 2;
// }

// console.log(a);

// _re:delete keyword w/ objects

const arr = [1, 2];
const obj = { a: 'a', b: 'b' };

delete arr[0];
delete obj.a;

console.log(
  arr,
  obj,
);
