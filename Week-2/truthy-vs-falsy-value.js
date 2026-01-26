// false
// 0 -0 0n (BigInt Zero)
// "" empty string
// null
// underfined
// NaN

if ("Hello") {
  console.log("This is a truthy value");
}

if (null) {
  console.log("This is a falsy value");
}

// For A && B:
// Is A falsy?
// Yes → return A
// No → return B

let compare1 = "d" && "data";

if (compare1) {
  console.log(compare1);
}

// For A || B:
// Is A falsy?
// Yes → skip A
// Is B falsy? → skip B → No return B

let compare2 = "" || "";

if (compare2) {
  console.log(compare2);
}
