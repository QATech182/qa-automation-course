// Declare a string
let myCar = "  I have a BMW car and my car age is 6 years and model is 2020.  ";
console.log(myCar);

// Find string length
// .length counts all characters including spaces
console.log(myCar.length);

// Trim extra spaces
// trim() removes spaces from start and end
let trimmedCar = myCar.trim();
console.log(trimmedCar);

// Convert string to uppercase
// Used for normalization (case-insensitive comparison)
let upperCaseCar = trimmedCar.toUpperCase();
console.log(upperCaseCar);

// Convert string to lowercase
let lowerCaseCar = trimmedCar.toLowerCase();
console.log(lowerCaseCar);

// Access characters using index
console.log("First character:", trimmedCar[0]);
console.log("Last character:", trimmedCar[trimmedCar.length - 1]);

// Check if string contains a word
// includes() returns true or false
console.log(trimmedCar.includes("BMW"));
console.log(trimmedCar.includes("TESLA"));

// Replace part of a string
// replace() replaces only the first match
let replacedCar = trimmedCar.replace("BMW", "TESLA");
console.log(replacedCar);

// Split string into words (space only)
let splitBySpace = upperCaseCar.split(" ");
console.log(splitBySpace);

// Count number of words
let wordCount = splitBySpace.length;
console.log(`Number of words: ${wordCount}`);

// Template literal example
let brand = "BMW";
let modelYear = 2020;
console.log(`My car brand is ${brand} and model year is ${modelYear}`);
