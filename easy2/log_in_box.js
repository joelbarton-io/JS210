function logInBox(string) {
	let leng = string.length

	console.log('+' + '-'.repeat(leng + 2) + '+')
	console.log('|' + ' '.repeat(leng + 2) + '|')
	console.log('| ' + string + ' |')
	console.log('|' + ' '.repeat(leng + 2) + '|')
	console.log('+' + '-'.repeat(leng + 2) + '+')

}

logInBox('hello there')