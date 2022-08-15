// continue until the number's length === the current fibonacci number's;

// have two seeds, 1, 1;

// calculate fibonacci based on seeds;
// every iteration, update seeds and current

// current = seed + seed2
// seed == seed1

// 1, 1 -> 2
// 1, 2 -> 3
// 2, 3 -> 5
// 3, 5 -> 8

function findFibonacciIndexByLength(n) {
	let index = 2n;
	let one = 1n;
	let two = 1n;
	let current = 0n;

	do {
		current = one + two;
		one = two;
		two = current;
		index += 1n;
	} while (String(current).length < n);
	return console.log(index);
}

findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
