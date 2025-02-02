/**
 * Problem:
 * Write a program that takes a string as input and returns the string reversed.
 *
 * Your task:
 * Implement the function `reverseString` that returns the reversed string of the input.
 *
 * Example:
 * reverseString("hello") should return "olleh".
 * reverseString("world") should return "dlrow".
 */

// Write your solution here
let reverseString = (name) => name.split("").reverse().join("");
console.log(reverseString("hello"));
console.log(reverseString("world"));

module.exports = reverseString;
