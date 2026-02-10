const num = [3, 6, 9, 10, 15, 58, 78, 200, 54, 687];

// map() = function
// -> Tranforms each lement inside an array and then returns a new array
// Try to use arrow functions

const tripled = num.map((num) => num * 3); // arrow function one line

const string = ["banana", "apple", "kiwi", "orange"];

//const stringAdded = string.map(string => string. )

const prices = [100, 200, 300];

const pricesWithTax = prices.map((p) => p * 1.5);
console.log(pricesWithTax); // [110, 220, 330]

/*
    function (num){
        return num * 3;
    }

    instead we use this one => num => num * 3
*/

console.log(tripled);

const evenNumber = num.filter((num) => num % 2 === 0);
console.log(evenNumber);

// find()

const firstAbove2 = num.find((num) => num > 2);
console.log(firstAbove2);

// findIndex()

// const firstAbove2 = num.find((num) => num > 2);
// console.log(firstAbove2);

// forEach() - performs an action against each element inside the array (Does not return an array)
const fruits = ["APPLE", "Banana", "Kiwi"];
fruits.forEach((fruits) => console.log(fruits.toLowerCase()));

// every()
const allPositive = num.every((num) => num > 0);
console.log("every():", allPositive);

// some()
const hasEven = num.every((num) => num % 2 === 0);
console.log("some():", hasEven);

// Chainging Methods
// filter() -> return new array
const numChain = [3, 6, 9, 10, 15, 58, 78, 200, 54, 687];

const result = numChain
  .filter((num) => num % 2 === 0) // filter() create new array
  .map((num) => num * num) // map() create new array
  .every((num) => num > 100);

console.log(result);

// reduce method - need to study
