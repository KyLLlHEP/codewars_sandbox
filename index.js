// function digitize(n) {
//   // Convert the number to a string
//   let numberString = n.toString();

//   // Split the string into an array of characters, representing individual digits
//   let digitsArray = numberString.split("");

//   // Reverse the array
//   let reversedArray = digitsArray.reverse();

//   // Convert the array of reversed digits back to numbers
//   let reversedDigits = reversedArray.map(Number);

//   return reversedDigits;
// }

// // Example usage:
// let randomNumber = 6789;
// let reversedDigitsArray = digitize(randomNumber);
// console.log(reversedDigitsArray); // Output: [9, 8, 7, 6]

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const finder = new SmallestIntegerFinder();
const result = finder.findSmallestInt([34, 15, 88, 2]);
console.log(result);
