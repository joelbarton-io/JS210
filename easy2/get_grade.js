function getGrade(...grades) {
  const average = grades.reduce((a, b) => a + b) / grades.length;

  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  if (average < 60) return 'F';
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
/*
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

*/