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

function getGrade(s1, s2, s3) {
  // Calculate the average of the three scores
  const averageScore = (s1 + s2 + s3) / 3;

  // Determine the letter grade based on the average score
  if (averageScore >= 90 && averageScore <= 100) {
    return "A";
  } else if (averageScore >= 80 && averageScore < 90) {
    return "B";
  } else if (averageScore >= 70 && averageScore < 80) {
    return "C";
  } else if (averageScore >= 60 && averageScore < 70) {
    return "D";
  } else {
    return "F";
  }
}

// Example usage:
const grade = getGrade(85, 92, 78);
console.log(grade); // Output: 'B'
// 3d task
function sumArray(array) {
  // Check for input validation
  if (!array || array.length <= 1) {
    return 0;
  }

  // Find the highest and lowest values in the array
  const highest = Math.max(...array);
  const lowest = Math.min(...array);

  // Sum all elements except the highest and lowest
  const sum = array.reduce((acc, num) => acc + num, 0) - highest - lowest;

  return sum;
}

// Example usage:
const result1 = sumArray([6, 2, 1, 8, 10]);
console.log(result1); // Output: 16

const result2 = sumArray([1, 1, 11, 2, 3]);
console.log(result2); // Output: 6
// 4rd task 7ku
function solution(str, ending) {
  // Use endsWith to check if the string ends with the specified suffix
  return str.endsWith(ending);
}

// Examples:
console.log(solution("abc", "bc")); // Output: true
console.log(solution("abc", "d")); // Output: false
