function isPalindrome(string) {
  let rightIndex = string.length - 1;

  for (let i = 0; i <= (string.length - 1) / 2; i += 1) {
    if (string[i] !== string[rightIndex]) {
      return false;
    }
    rightIndex -= 1;
  }
  return true;
}

console.log(
  isPalindrome('madam'), // true
  isPalindrome('Madam'), // false (case matters)
  isPalindrome("madam i'm adam"), // false (all characters matter)
  isPalindrome('356653'), // true
);
