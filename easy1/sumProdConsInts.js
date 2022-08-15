let input = prompt("Enter an integer greater than 0: ");
let operation = prompt("Enter 's' to compute the sum, or 'p' to compute the product. ");

function sum(n) {
	let result = 0;
	for (let index = 1; index <= n; index++) {
		result += index;
	}
	return result;
}

function product(n) {
	let result = 1;
	for (let index = 1; index <= n; index++) {
		result *= index;
	}
	return result;
}

if (operation === 's') {
	console.log(sum(parseInt(input)));
} else if (operation === 'p') {
	console.log(product(parseInt(input)));
}