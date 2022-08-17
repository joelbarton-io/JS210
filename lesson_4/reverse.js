const reverse = (input) => {
  let result;

  if (Array.isArray(input)) {
    result = [];
    for (let index = input.length - 1; index >= 0 ; index--) {
      result.push(input[index]);
    }
  } else {
    result = '';
    for (let index = input.length - 1; index >= 0 ; index--) {
      result += input[index];
    }
  }

  return console.log(result);
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]