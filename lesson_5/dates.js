

// function formattedDate() {
//   let today = new Date();
//   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   let dayOfMonth = String(today.getDate());

//   function suffix(dayOfMonth) {
//     let lastDig = Number(dayOfMonth[Number(dayOfMonth.length - 1)]);

//     if (lastDig > 3) return 'th'
//     if (lastDig === 3) return 'rd';
//     if (lastDig === 2) return 'nd';
//     if (lastDig === 1) return 'st';
//   }

//   function formattedMonth() {
//     return String(months[Number(today.getMonth())]) + ' ';
//   }

//   function formattedDay() {
//     return String(dayOfMonth + suffix(dayOfMonth)) + '.';
//   }

//   function formattedDayOfWeek() {
//     return String(daysOfWeek[today.getDay()]) + ', ';
//   }
//   return "Today's date is " + formattedDayOfWeek() + formattedMonth() + formattedDay();
// }

// console.log(formattedDate());

// let today = new Date();
// let nextWeek = new Date(today.getTime);

// console.log(today.toDateString() === nextWeek.toDateString());

// nextWeek.setDate(today.getDate() + 7);

// console.log(today)
// console.log(nextWeek)

// console.log(today.toDateString() === nextWeek.toDateString());


// let today = new Date();

// function formatTime(date) {
//   let hr = date.getHours();
//   let min = date.getMinutes();

//   if (hr <= 9) hr = '0' + String(hr);
//   if (min <= 9) min = '0' + String(min);
//   return hr + ':' + min;
// }

// console.log(formatTime(today))