let isUserLoggedIn = true;
let statusUpdate = isUserLoggedIn ? "Welcome Back" : "Please log in";
console.log(statusUpdate);

// Example with ternary
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor"; // same as if else statement
console.log(message);

// ? before this sign (if statement)
// : else

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(2));
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(11));

// fizbuss example

// Template Literals
let name = "Alice";
let isVIP = true;

//console.log(`Hello, ${isVIP ? "VIP" : "Guest ${name}}`);
