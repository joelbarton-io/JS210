function average(args) {
  return (args.reduce((partialSum, a) => partialSum + a, 0) / args.length);
}

function studentGrade() {
  function getScores() {
    return [51, 100, 77, 86, 79];
  }

  const AVERAGE = average(getScores());
  let letterGrade;

  if (AVERAGE >= 90) {
    letterGrade = 'A';
  } else if (AVERAGE >= 70) {
    letterGrade = 'B';
  } else if (AVERAGE >= 50) {
    letterGrade = 'C';
  } else {
    letterGrade = 'F';
  }
  console.log('Based on the average of your 3 scores your letter grade is a: ' + letterGrade);

}

studentGrade(55, 10, 40, 100, 55, 100);