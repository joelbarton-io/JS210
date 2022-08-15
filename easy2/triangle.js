function triangle(nStars) {
	const STAR = '*';
	const SPACE = ' ';

	for (let index = nStars; index >= 0; index--) {
		console.log(SPACE.repeat(index) + STAR.repeat(nStars - index));
	}
}
