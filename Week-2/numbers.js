// Declare numbers
let num1 = 10;
let num2 = 3;

// Basic arithmetic operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2); // 5 % 2 -> Reminder is 1

// Rounding numbers
let decimalNum = 4.9;
console.log("Math.round:", Math.round(decimalNum)); // nearest integer
console.log("Math.floor:", Math.floor(decimalNum)); // always down
console.log("Math.ceil:", Math.ceil(decimalNum)); // always up
console.log("Math.trunc:", Math.trunc(decimalNum)); // remove decimal part

// Rounding negative numbers (important difference)
let negativeNum = -4.9;
console.log("Trunc negative:", Math.trunc(negativeNum)); // truncate = cut off -> remove the negative part and do not care about the value so the result is -4
console.log("Floor negative:", Math.floor(negativeNum)); // floor = go down -> “Down” means more negative so the result is -5

// Note for Why this matter?
// Money / pricing → usually floor
// Age / years / counters → usually trunc

// Format number to fixed decimal places
// toFixed() returns a STRING, not a number
let price = 9.567;
let formattedPrice = price.toFixed(2);
console.log(formattedPrice); // toFixed() returns a string because it formats the number for **display only** and not for mathematical calculations.
console.log(typeof formattedPrice);

// Convert formatted string back to number
let convertedPrice = Number(formattedPrice);
console.log(convertedPrice);
console.log(typeof convertedPrice);

// Check if a value is an integer -> Number.isInteger()
console.log(Number.isInteger(257)); // true
console.log(Number.isInteger(257.54)); // false

// Check for NaN (Not-a-Number)
console.log(isNaN("abc")); // true
console.log(isNaN(10)); // false

// Math utility methods
console.log("Absolute:", Math.abs(-20));
console.log("Min:", Math.min(3, 7, 2));
console.log("Max:", Math.max(3, 7, 2));
console.log("Power:", Math.pow(2, 10));
console.log("Square root:", Math.sqrt(49));

// Generate random number between 0 and 1
console.log(Math.random());

// Generate a random whole number between 1 and 10
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
let random1to10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random1to10);

// Real example: calculate car age
let carYear = 2020;
let currentYear = new Date().getFullYear(); // canculate base on the current Date and Year
let carAge = currentYear - carYear;
console.log(`Car age is ${carAge} years`);
