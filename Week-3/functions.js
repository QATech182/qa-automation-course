// function functionName (parameters){
//      Code to be executed
// }

// Multiple Parameters
function add(a, b) {
  console.log(a + b);
}
add(2, 5);

// Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet();
greet("Alice!");

// Arrow Functions => Shorter Syntax
const greetShorterSyntax = (name) => console.log("Hello, " + name + "!");
greetShorterSyntax("Dave");
