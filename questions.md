- are variables declared with `let` and `const` hoisted? Since we cannot access them pre-initialization?

- details around implicit type coercion

- variables declared with `var`, discarded vs ignored

- default values question

- immutability of primitives (the 'same' value)

- Is `=` an operator or a statement?

- string primitives being referenced by multiple (different) variables; do they hold pointers to the "same" string primitive or do they simply have the same value?

-

main concepts:

- Hoisting declarations
- var vs let + const
- strict mode/silent errors
- partial function application
- accessing value of a non-existent object property
- accessing value of a non-existent array index
- accessing a property of `undefined` -> ERROR
- arrays as a type of object


- function expression
- function declaration
- invoking a function with wrong # of args
- uninitialized local variables reference `undefined`

- variable shadowing
- variables as pointers
- global/function scoped local variables
- variable lookup path (local/global)
- reassignment/multiple variables of diff scopes having 'same' value (copy)
- mutability/immutability
- operations that mutate objects
- operations on primitive value (creating new value)
- implicit type coercion in non-strict equality operations
- implicit type coercion with relational operators (<, >, ...)
- sparse arrays (<three empty items>)
- dynamic typing of variables


