// Part 1: Arithmetic Operators
// 1.

let numOne = 25;
let numTwo = 36;

console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);
console.log(numOne / numTwo);

// 2.

let x = 24;

x++;
console.log(x);

x--;
console.log(x);

// 3.

let mainNumber = 10;
let divider = 3;

console.log(mainNumber % divider);

// 4.

let myBaseNumber = 2;

console.log(myBaseNumber ** 3);

// Part 2: Comparison Operators
// 1.

let myNum = 4;
let myString = "4";
console.log(myNum === myString);

// 2.

let myFirstValue = 35;
let mySecondValue = 45;

console.log(myFirstValue > mySecondValue);
console.log(myFirstValue < mySecondValue);

// 3.

let valueOne = 54;
let valueTwo = 45;

console.log(valueOne !== valueTwo);

// Part 4: Truthy vs Falsy
// 1.

let myValue = "";

// Option 1 with if
// (myValue) is falsy so it will not get excuted the code within {}

if (myValue) {
  console.log("Falsy Value Detected");
}

// Option 1 with if else
// (myValue) is falsy so it will not get excuted the code within {} but it will print our else {} part

if (myValue) {
  console.log("Truthy Value Detected");
} else {
  console.log("Falsy Value Detected");
}

// 2.

let myTruthyValue = "Hello";

if (myTruthyValue) {
  console.log("Truthy Value Detected");
}

// 3.

let finalValue = "" || "truthy value is executed";
console.log(finalValue);

console.log("Challenge");

// Step1 - there is no userName at this stage so "please sign up" message appeared
let userName;

if (userName) {
  console.log("Welcome Back!");
} else {
  console.log("Please sign up");
}

// Step2 - User login with valid user account so the system welcome message appeared with greeting.
userName = "Eric";

if (userName) {
  console.log("Welcome Back! " + userName);
} else {
  console.log("Please sign up");
}
