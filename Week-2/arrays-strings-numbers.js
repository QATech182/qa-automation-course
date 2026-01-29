// Week 2 - Assignment 4
//- An array of **car brands** (at least 5)

const carBrand = ["BMW", "Mazada", "Tesla", "Honda", "Toyota"];

//- An array of **numbers**

const numbers = [77, 88, 27, 9, 62];

//- A **string** with extra spaces

const customerName = [" Tom  ", " Bob", "Eric ", "   Alex   ", "    Jack"];

//- A **decimal number**

const decimalNumber = [12.23, 41.12, 54.1, 65.47, 87.98];

// PART 1: ARRAYS (Car Brands)
// Task 1: Accessing & Properties
// 1. Log the first car brand
console.log(carBrand[0]); // used the array index 0 to get the first car name

// 2. Log the last car brand using a method
console.log(carBrand.at(-1)); // index starting from 0 and index -1 is to get last array

//3. Log how many car brands are in the array
console.log(carBrand.length); // length can generate a total of each array.

// Task 2: Updating Elements
// 1. Change the **second car brand**
carBrand[1] = "Suzuki";
console.log(carBrand);

// 2. Change the **last car brand**
carBrand[4] = "Ford";
console.log(carBrand);

// 3. Log the updated array
console.log(carBrand);

// Task 3: Mutator Methods
// 1. Add a new car brand to the **end**
carBrand.push("Kia");
console.log(carBrand);

// 2. Remove the **last** car brand
carBrand.pop();
console.log(carBrand);

// 3. Add a new car brand to the **beginning**
carBrand.unshift("Kia");
console.log(carBrand);

// 4. Remove the **first** car brand
carBrand.shift("Kia");
console.log(carBrand);

// 5. Reverse the array
carBrand.reverse();
console.log(carBrand);

// 6. Sort the array alphabetically
carBrand.sort();
console.log(carBrand);

// Task 4: Finder Methods
// 1. Check if `"Toyota"` exists in the array
const indexOfToyota = carBrand.indexOf("Toyota");
console.log(indexOfToyota); // there is no toyota in the car array so returns -1

// 2. Find the index of `"BMW"`
const indexOfBMW = carBrand.indexOf("BMW");
console.log(indexOfBMW); // BMW is fist one so the index is 0

// 3. Find the last index of a car brand that appears more than once
carBrand.unshift("Tesla");
console.log(carBrand);

const lastIndexOfCarBrand = carBrand.lastIndexOf("Tesla"); // add the Tesla .unshift again to get 2 values and use the .lastIndexOf to find the index of" Tesla" which is 5
console.log(lastIndexOfCarBrand);

// Task 5: Joiners
// 1. Convert the car brands array into a **single string**
const carString = carBrand.join(", ");
console.log(carString);

// 2. Check if the car brands variable is an array
console.log(Array.isArray(carBrand));

// 3. Convert the word `"ENGINE"` into an array of characters
const strWordToChar = "ENGINE";
const char = Array.from(strWordToChar);
console.log(char);

// PART 2: STRING MANIPULATION
// Task 6: Clean a String
// 1. Remove extra spaces from the string
const str = "    Tom    ";
const removeSpaces = str.trim();

// 2. Log the cleaned string
console.log(str.trim());

// 3. Log its length
console.log(removeSpaces.length);

// Task 7: Case & Access
let myName = "Eric Aung";
//let upperCaseName = myName.toUpperCase();

// 1. Convert the string to **uppercase**
console.log(myName.toUpperCase());

// 2. Convert it to **lowercase**
console.log(myName.toLowerCase());

// 3. Log the **first** character
console.log(myName[0]);

// 4. Log the **last** character
console.log(myName[8]);

// Task 8: Slice & Replace
// 1. Extract the **first word**
console.log(myName.slice(0, 4));

// 2. Extract the **last word**
console.log(myName.slice(5));

// 3. Replace one word with another
console.log(myName.replace("Aung", "KA"));

// Task 9: Search Methods
const myStr = "I want to have a car";

// 1. Check if the string includes `"car"`
console.log(myStr.includes("car"));

// 2. Find the position of a word
console.log(myStr.indexOf("car"));

// 3. Check if the string starts with a specific word
console.log(myStr.startsWith("I"));

// 4. Check if the string ends with a specific word
console.log(myStr.endsWith("car"));

// Task 10: Split & Concat
// 1. Split the sentence into words
console.log(myStr.split(""));

// 2. Join two strings using a method (not `+`)
console.log(myName.concat(", ", myStr));

// Task 11: Template Literals
// Create variables for:
// - car brand
// - car year (has to be in the past)
// - car age (think about how you get the car age)
let carName = "BMW";
let carYear = 2020;
let carAge = 2026 - carYear;

// Create a sentence using the variables and print the output
let myCar = `I have a ${carName} car and my car age is ${carAge} years and model is ${carYear}`;
console.log(myCar);

// PART 3: NUMBERS
// Task 12: Rounding
// 1. Round a decimal normally
let num = 27.456;
console.log(Math.round(num));

// 2. Always round down
console.log(Math.floor(num));

// 3. Always round up
console.log(Math.ceil(num));

// 4. Remove the decimal part
console.log(Math.trunc(num));

// Task 13: Formatting
// 1. Format a number to **2 decimal places**
let result = num.toFixed(2);
console.log(result);
// console.log(typeof result);

// 2. Explain (in comments) why the result is **not a number**
// toFixed() returns a string because it formats the number for **display only** and not for mathematical calculations.

// Task 14: Conversions
// 1. Convert a numeric string into a number
console.log(Number(num.toFixed(1)));

// 2. Convert a decimal string into an integer
console.log(parseInt(num.toFixed(1)));

// 3. Convert a decimal string into a float
console.log(parseFloat(num.toFixed(2)));

// Task 15: Checking
// 1. Check if a value is **Not a Number**
console.log(isNaN("text"));

// 2. Check if a number is an integer
console.log(Number.isInteger(257.84));

// Task 16: Math Utilities
// 1. Find the absolute value of a number
console.log(Math.abs(-78));

// 2. Find the smallest number
console.log(Math.min(28, 78, 597));

// 3. Find the largest number
console.log(Math.max(28, 78, 597));

// 4. Raise a number to a power
console.log(Math.pow(8, 3));

// 5. Find the square root of a number
console.log(Math.sqrt(7, 5));

// Task 17: Random Numbers
// 1. Generate a random number between 0 and 1
console.log(Math.random()); // Math.random() generates a number between 0 and 1

// 2. Generate a random whole number between **1 and 10**
console.log(Math.random() + (10 - 1 + 1) + 1); // this is a formula to generate the random number betweeen max 10 and min 1

// 3. Explain the formula in comments
// Math.random() + (max - min +1) + min -> this is a formula to generate in a range we want

// 🚀 FINAL MINI CHALLENGE
// Write a program that:
// 1. Takes a sentence about cars
console.log(myCar);

// 2. Clean it (trim + case change)
let cleanedCarSentence = myCar.trim().toUpperCase();
console.log(cleanedCarSentence);

// 3. Split into words
let words = cleanedCarSentence.split(" ");
console.log(words);

// 4. Print the number of words using a template literal
let finalResult = `Number of words: ${words.length}`;
console.log(finalResult);
