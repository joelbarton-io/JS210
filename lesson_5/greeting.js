function greetings(arr, obj) {
  let result = '';

  for (let i = 0; i < arr.length - 1; i++){
    result += arr[i] + ' ';
  }

  result += arr[arr.length - 1];

  return result + '! Nice to have a ' + `${obj.title} ${obj.occupation}` + ' around.';
}

console.log(greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' }));