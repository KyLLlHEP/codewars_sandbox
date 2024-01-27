function digitize(n) {
  // Convert the number to a string
  let numberString = n.toString();

  // Split the string into an array of characters, representing individual digits
  let digitsArray = numberString.split("");

  // Reverse the array
  let reversedArray = digitsArray.reverse();

  // Convert the array of reversed digits back to numbers
  let reversedDigits = reversedArray.map(Number);

  return reversedDigits;
}

// Example usage:
let randomNumber = 6789;
let reversedDigitsArray = digitize(randomNumber);
console.log(reversedDigitsArray); // Output: [9, 8, 7, 6]
