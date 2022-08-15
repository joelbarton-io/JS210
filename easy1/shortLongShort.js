function shortLongShort(str1, str2) {
	let answer = (str1.length > str2.length)

	if (answer) {
		console.log(str2 + str1 + str2);
	} else {
		console.log(str1 + str2 + str1);
	}
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"