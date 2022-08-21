// i -> floating point number;

function dms(floatingPointNum) {
  const SIXTY = 60;
  const arr = String(floatingPointNum).split('.');
  let degrees = Number(arr[0]);

  if (arr.length === 1) return `${degrees}°00'00`;

  let minutes = (Number(arr[1]) / 100) * SIXTY;

  // if (minutes <= SIXTY) {
  //   degrees += 1;
  // }

  while (minutes > SIXTY) {
    minutes -= SIXTY;
    degrees += 1;
  }

  if (minutes === 0) return `${degrees}°${Math.floor(minutes)}'00`;

  let seconds = (Number(String(minutes).split('.')[1]) / 10) * SIXTY;

  while (seconds > SIXTY) {
    seconds -= SIXTY;
    minutes += 1;
  }

  return `${degrees}°${Math.floor(minutes)}'${seconds}`;
}

console.log(
  // dms(30), // 30°00'00"
  // dms(76.73), // 76°43'48"
  dms(254.6), // 254°35'59"
  // dms(93.034773), // 93°02'05"
  // dms(0), // 0°00'00"
  // dms(360), // 360°00'00" or 0°00'00"
);
