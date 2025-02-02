/**
 * Problem:
 * Write a program that checks whether a given number is even or odd.
 *
 * Your task:
 * Implement the function `isEvenOrOdd` that takes a number and returns either "Even" or "Odd".
 *
 * Example:
 * isEvenOrOdd(4) should return "Even".
 * isEvenOrOdd(3) should return "Odd".
 */

// Write your solution here
function isEvenOrOdd (a){
    if (a % 2 == 0) {
        return"Even"
    } else {
        return"Odd"
    }
}
console.log(isEvenOrOdd(5));
console.log(isEvenOrOdd(4));
module.exports = isEvenOrOdd;
