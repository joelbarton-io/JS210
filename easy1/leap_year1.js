	// if div 400 && div 100 -> leap year
	// if div 100 -> not leap year
	// if div 100 && div by 4 -> not leap year
	// if div 4 -> leap year

  function isLeapYear(year) {

    let result = false;
    year = parseInt(year, 10);

    if (year % 4 === 0) {
      if (year % 100 === 0 && year % 400 === 0) {
        result = true;
      } else if (year % 100 === 0){
        result = false;
      } else {
        result = true;
      }
    } else {
      result = false;
    }
    return result;
  }
  console.log(isLeapYear(2016));      // true
  console.log(isLeapYear(2015));      // false
  console.log(isLeapYear(2100));      // false
  console.log(isLeapYear(2400));      // true
  console.log(isLeapYear(240000));    // true
  console.log(isLeapYear(240001));    // false
  console.log(isLeapYear(2000));      // true
  console.log(isLeapYear(1900));      // false
  console.log(isLeapYear(1752));      // true
  console.log(isLeapYear(1700));      // false
  console.log(isLeapYear(1));         // false
  console.log(isLeapYear(100));       // false
  console.log(isLeapYear(400));       // true