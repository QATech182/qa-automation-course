// Numbers example
const numbersArray = [1, 2, 2, 3, 3, 4];
console.log(numbersArray);

const numbersSet = new Set(numbersArray);
console.log(numbersSet);

// Strings example
const colorSet = new Set(["green", "red", "red"]);
console.log(colorSet);

console.log(colorSet.add("yellow"));
console.log(colorSet.has("red"));

// .add() .has() .delete() array.size
// ... spread operator
