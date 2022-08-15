// both indices positive & start < end & both are within bounds; return substring from start (in) to end (ex)

// if start > end, swap, then do step 1

// if start === end; return empty string;
// if end is undefined, just go from start to end` of string;
// if either index is < 0 || NaN -> it is zero;
// if either is > string length, it will be string.length;


    // check integrity of values;
    // - if end is undefined -> 0
    // - if start/end is NaN || 0
    // - if start/end > string.length; -> it == string.length;
    // - start == end; return '';

    // traverse and construct new string;

// function substring(string, start, end) {
//     if (end === undefined) {
//         end = string.length;
//     }
//     if (start < 0 || !(typeof (start) === 'number')) {
// 		start = 0;
//     }
//     if (end < 0 || !(typeof (end) === 'number')) {
// 		end = 0;
//     }
// 	if (start > end) {
// 		temp = start;
// 		start = end;
// 		end = temp;
// 	}
// 	if (start === end) {
// 		console.log('');
// 		return;
// 	}
// 	if (start > string.length - 1) {
// 		start = string.length - 1;
// 	}
// 	if (end > string.length - 1) {
// 		end = string.length - 1;
// 	}

// 	let constructed = '';
// 	for (let index = start; index <= end; index++) {
// 		constructed += string[index];
// 	}
// 	console.log(constructed);
// 	return constructed;
// }

function substring(string, start, end) {
	if (end === undefined) {
	  end = string.length;
	}

	if (start < 0 || isNaN(start)) {
	  start = 0;
	}

	if (end < 0 || isNaN(end)) {
	  end = 0;
	}

	if (start > end) {
	  [start, end] = [end, start];
	}

	if (start > string.length) {
	  start = string.length;
	}

	if (end > string.length) {
	  end = string.length;
	}

	let newString = '';
	for (let index = start; index < end; index += 1) {
	  newString += string[index];
	}

	return newString;
  }
let string = 'hello world';
console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"