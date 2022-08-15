function checkPassword() {
  const password = 'password';
  let counter = 0;

  while (counter < 3) {
    let guess = prompt("enter guess");
    if (guess == password) {
      alert('You have successfully logged in, password is: ' + password)
      return;
    }
    counter += 1;
    alert('guesses: ' + String(3 - counter))
  }
  alert('You have been denied access.')
  return;
}

checkPassword()