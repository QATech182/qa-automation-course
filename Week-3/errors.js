// Syntax Error: Mistakes in your code structure
// Reference Error: Using a variable that doesn't exist
// Type Error: Using a value in a way thatʼs not allowed
// Range Error: Number out of allowed range

// SyntaxError

// ReferenceError
let x = 20;
console.log(x);

// TypeError

// RangeError
console.log("hi".repeat(3));
//console.log("hi".repeat(-3));

// function vs return
function hello() {
  console.log(["green", "yellow"]);
  return "Hellow World";
}

hello();
