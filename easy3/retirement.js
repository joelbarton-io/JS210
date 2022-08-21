const rlSync = require('readline-sync');

const age = Number(rlSync.question('age: '));
const retirementAge = Number(rlSync.question('retirement age: '));
const yearsToGo = retirementAge - age;

const today = new Date();
const currentYear = today.getFullYear();
const retirementYear = currentYear + yearsToGo;

console.log(
  `It's ${currentYear}.  You want to retire in ${retirementYear}.`,
  `You only have ${yearsToGo} years of work to go!`,
);
