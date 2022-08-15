// iterate from zero to one less than total size
// declare two variables; current and next
// compare variables, if same, don't append current
// return constructed string.

function dailyDouble(string) {
	let constrString = '';
	let curr;
	let next;

	for (let index = 0; index < string.length; index++) {
		curr = string[index];
		next = string[index + 1];

		if (curr === next) {
			continue;
		}
		constrString += curr;
	}
	return constrString;
}

console.log(dailyDouble('4444abcabccba'))