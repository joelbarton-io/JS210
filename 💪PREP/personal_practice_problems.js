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
