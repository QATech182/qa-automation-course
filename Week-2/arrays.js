let fruits = ["Apple", "Banana", "Kiwi"];

console.log(fruits[2]);

fruits[1] = "Mango";

console.log(fruits.length);

// .concat()

// .flat()

// .slice()

const number = [1, 2, 3, 4, 5];
const slicedNumberArray = number.slice(1, 4);

console.log(slicedNumberArray);

// .pop() -

// .unshift() -

// 6. .reverse() - reverse an array

let fruit = ["Apple", "Mango", "Kiwi"];
fruit.reverse();
console.log(fruit);

// 7. .sort() - sorts the array

let myNumberSorting = [2, 3, 45, 89, 55, 100];
console.log(myNumberSorting.sort());

// 8.

// 1. indexOf() - returns the index of a specific element inside an array

const color = ["Red", "Yellow", "Purple", "Red"];
console.log(color.indexOf("Yellow"));

// 2. lastIndexOf() -

console.log(color.lastIndexOf("Red"));

// 3. at() -
console.log(color.at(1));
console.log(color.at(-1)); // -> last element (interview questions)

// 4. includes() - checks if an elemets exists inside an array
const trainLines = ["F", "Q", "B", "M"];
console.log(trainLines.includes("O"));
console.log(trainLines.includes("M"));
console.log(trainLines.indexOf("M"));

// Joiners & Converters
// .join() - converts an array into string

const kaungFruits = ["Apple", "Banana", "Kiwi"];
const kaungFruitsString = kaungFruits.join(" , "); // same as tr command
console.log(kaungFruitsString);

// Array.from() - creates an array from a string

const str = "Hello";
const chars = Array.from(str);
console.log(chars);

// Array.isArray[]

const nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray[nycNumbers]);

const nyNumbers = 1;
console.log(Array.isArray[nyNumbers]);

const luckyNumbers = 1;
console.log(Array.isArray[luckyNumbers]);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
