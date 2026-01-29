// Setup data
// - An array of **car brands**
// - An array of **numbers**
// - A sentence about cars
// - A decimal number

const carBrands = ["Toyota", "BMW", "Honda", "Mercedes"];
const numbers = [10, 25, 40, 99];
const text = "   I Love Driving Cars   ";
const decimalNumber = 4.7;

// PART 1: STRING + FUNCTIONS

// Task 1: Clean & Format Text
// Write a function that:
// 1. Takes a string
// 2. Removes extra spaces at the start and end
// 3. Converts the string to lowercase
// 4. Returns the cleaned string

function cleanText(text) {
  return text.trim().toLowerCase();
}
console.log(cleanText(text));

// Task 2: First & Last Character
// Write a function that:
// 1. Takes a string
// 2. Returns:
//     - The first character
//     - The last character
// 📌 Must handle strings with spaces.

function firstAndLastChar(text) {
  const cleaned = text.trim();
  return {
    first: cleaned[0],
    last: cleaned[cleaned.length - 1],
  };
}
console.log(firstAndLastChar(text));

// Task 3: Word Counter
// Write a function that:
// 1. Takes a sentence
// 2. Splits it into words
// 3. Returns the number of words
// 📌 Use string and array methods only.

function wordCount(text) {
  return text.trim().split(" ").length; // " " to get the words if we have no spaces between double code, we will get the char
}

console.log(wordCount(text));

// PART 2: ARRAY + FUNCTIONS
// Task 4: Brand Checker
// Write a function that:
// 1. Takes an array of car brands
// 2. Takes a brand name
// 3. Returns:
//     - `"Brand exists"` if found
//     - `"Brand not found"` otherwise
// 📌 Case-insensitive comparison required.

function brandChecker(brands, brandName) {
  const allBrands = brands.join(",").toLowerCase(); // convert array to string and change to lowercase to standardized format
  const targetBrand = brandName.toLowerCase(); // also convert the search keyword into lowercase to match the case

  if (allBrands.includes(targetBrand)) {
    return `${targetBrand} Brand exists!`;
  } else {
    return `${targetBrand} Brand not found!`;
  }
}

console.log(brandChecker(carBrands, "toyota"));

// Task 5: Get Last Brand
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns the **last brand** using an array method

function lastBrand(brands) {
  return brands[brands.length - 1];
}
console.log(lastBrand(carBrands));

carBrands.push("Kia"); // after adding the Kia brand at the end of Array
console.log(lastBrand(carBrands)); // last car brand is Kia

// Task 6: Format Brands List
// Write a function that:
// 1. Takes an array of car brands
// 2. Returns a **single string** of brands separated by commas

function singleBrand(brands) {
  return brands.join(", "); // .join() is used for Array → String
}
console.log(singleBrand(carBrands));

// PART 3: NUMBER + FUNCTIONS
// Task 7: Safe Rounding
// Write a function that:
// 1. Takes a number
// 2. If the value is not a number → return `"Invalid number"`
// 3. Otherwise:
//     - Round it normally
//     - Return the result

function returnNum(num) {
  if (typeof num !== "number" || isNaN(num)) {
    // string 5.2 change to number 5.2 so I have added the typeof checking first with || OR comparison
    return "Invalid number!";
  } else {
    return Math.round(num);
  }
}

console.log(returnNum("5.2"));

// Task 8: Price Comparison
// Write a function that:
// 1. Takes two prices
// 2. Returns:
//     - `"Prices are equal"`
//     - `"First is higher"`
//     - `"Second is higher"`

function comparePrice(priceOne, priceTwo) {
  if (priceOne === priceTwo) {
    return "Prices are equal";
  } else if (priceOne > priceTwo) {
    return "First is higher";
  } else {
    return "Second is higher";
  }
}

console.log(comparePrice(99, 99.95));

// Task 9: Random Whole Number
// Write a function that:
// 1. Returns a random **whole number between 1 and 10**
// 2. Explain the formula in comments

function randomWholeNumberChecker(min, max) {
  // Formula to generate a random whole number between 1 and 10 is Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomWholeNumberChecker(10, 100));

// Explain the formula as far as I understand as follows:
// Ans: Math.random() creates a random decimal between 0 and 1.
//      Multiplying by (max - min + 1) sets the range between two numbers.
//      + min is also important and it can limit to show the random number correct starting point
//      and then again Math.floor() removes decimals from random(), and adding min shifts the result to the desired range.

// PART 4: CONDITIONAL THINKING

// Task 10: Budget Check
// Write a function that:
// 1. Takes:
//     - car price
//     - user budget
// 2. Returns:
//     - `"Within budget"`
//     - `"Over budget"`
//     - `"Invalid input"`

// 📌 Must validate inputs before comparing.
// → This means check if a car price is negative and it is a number and also if the budget is negative and
// if it is a number. **HINT:** This should handle returning `"Invald input"` part.

function budgetChecker(price, budget) {
  // Step 1: validate inputs -
  if (
    typeof price !== "number" ||
    typeof budget !== "number" ||
    price < 0 ||
    budget < 0
  ) {
    return "Invalid input";
  }

  // Step 2: compare values
  if (price <= budget) {
    return "Within budget";
  } else {
    return "Over budget";
  }
}

console.log(budgetChecker(1000, 1000));

// FINAL MINI-CHALLENGE

// Task 11: Simple Car Deal Summary

// Write a function that:
// 1. Takes:
//     - car brand
//     - car price
//     - user budget
// 2. Cleans the brand name
// 3. Rounds the price
// 4. Checks if the car is affordable
// 5. Returns a sentence using **template literals**

const carBrandList = ["Toyota", "BMW", "Honda", "Mercedes"];

function carDealerCalculation(brand, price, budget) {
  // Step 1: validate inputs -
  if (
    typeof brand !== "string" ||
    typeof price !== "number" ||
    typeof budget !== "number" ||
    price < 0 ||
    budget < 0
  ) {
    return "Invalid input";
  }

  // Step 2: clean brand & round price
  const cleanCarBrand = brand.trim().toLowerCase(); // remove spaces and case sensitive
  const priceUpdate = Math.round(price);

  // Step 3: case-insensitive brand check from the car list
  const brandListLower = carBrandList.join(",").toLowerCase();

  if (!brandListLower.includes(cleanCarBrand)) {
    return "Brand not available!";
  }

  // Step 4: budget check
  if (priceUpdate <= budget) {
    return `${cleanCarBrand} costs ${priceUpdate} and is within your budget amount $${budget}`;
  } else {
    return `${cleanCarBrand} costs ${priceUpdate} and is over your budget amount $${budget}`;
  }
}

console.log(carDealerCalculation("Kia", 1000, 500));
