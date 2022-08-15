function stringify(n) {
	let one = '1';
	let zero = '0';
	let result = '';

	for (let index = 0; index < n; index++) {
		index % 2 === 0 ? result += one : result += zero;
	}
	return console.log(result);
}

stringify(17)