/* ## 📌 RULES (STRICT)

- ✅ Every task must be written as a **function**
- ❌ Do NOT create arrays inside functions
- ❌ No objects
- ✅ Follow the **required loop type** for each task

## PART 1: `for` LOOP (Index Practice)

### 🔁 Task 1: Print All Elements

**Use a `for` loop**
Write a function that:
1. Takes an array
2. Prints each element
*/

const colors = ["white", "blue", "red", "yellow", "violet", "rainbow"];

function colorsPicker(addTheColorArray) {
  for (let i = 0; i < addTheColorArray.length; i++) {
    console.log("My pick color is: " + addTheColorArray[i]);
  }
}
colorsPicker(colors);

/* ### Task 2: Index + Value

**Use a `for` loop**
Write a function that:
1. Takes an array
2. Prints both the **index** and **value** of each element
*/

function colorsIndexPicker(addTheColorArray) {
  for (let i = 0; i < addTheColorArray.length; i++) {
    console.log(
      `My pick color is: ${addTheColorArray[i]} and index no. is ${i}`,
    );
  }
}
colorsIndexPicker(colors);

/* ### Task 3: First and Last

**Use a `for` loop**

Write a function that:
1. Takes an array
2. Prints:
    - The first element
    - The last element (using `array[array.length - 1]`) → We did not cover this last class specifically but 
    it should make sense to you what it is doing. Please bring it up in class if you don’t understand it. `Do not use .at(-1).`
*/

function pickFirstAndLastElement(addTheColorArray) {
  for (let i = 0; i < addTheColorArray.length; i++) {
    if (i === 0 || i === addTheColorArray.length - 1) {
      console.log(
        `My pick color is: ${addTheColorArray[i]} and index no. is ${i}`,
      );
    }
  }
}
pickFirstAndLastElement(colors);

/* ## PART 2: `while` LOOP (Strings)

### 🔄 Task 4: Loop Through a String

**Use a `while` loop**
Write a function that:
1. Takes a **string**
2. Uses a `while` loop
3. Prints **each character** one by one
*/

const myName = "  Eric Aung   ";

let i = 0;
function printEachChar(word) {
  let noSpace = word.split(" ").join("");
  while (i < noSpace.length) {
    console.log("Each Character: ", noSpace[i]);
    i++;
  }
}
printEachChar(myName);

/* ## PART 3: `for` LOOP + CONTROL FLOW

### 🛑 Task 5: Stop When Found

**Use a `for` loop**
Write a function that:
1. Takes an array and a value to search for
2. Loops through the array using a `for` loop
3. Stops the loop when the value is found
*/

function stopWhenFound(array, stringValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stringValue) {
      console.log("My Search Value is found");
      break;
    }
  }
}
stopWhenFound(colors, "violet");

/* ## PART 4: `for...of` LOOP (Value Access)

### 🔂 Task 6: Print Values

**Use a `for...of` loop**
Write a function that:
1. Takes an array
2. Prints each value
*/

function eachValue(array) {
  for (const color of colors) {
    console.log("Name of Color: ", color);
  }
}
eachValue(colors);

/* ### Task 7: Skip a Value

**Use a `for...of` loop**

Write a function that:
1. Takes an array and a value to skip
2. Prints all values except the skipped one
*/

function skipTheValue(array, value) {
  for (const color of colors) {
    if (color === value) continue;
    console.log("Name of Color: ", color);
  }
}
skipTheValue(colors, "rainbow");

/* ## PART 5: APPLYING LOGIC

### 🔄 Task 8: Uppercase Strings
**Use both `for` and `for...of` loops. Write two separate functions for different loop types.**

Write a function that:
1. Takes an array of strings
2. Returns a **new array** with all strings converted to **uppercase**

📌 Do NOT modify the original array
*/

function newArrayWithUpperCase(arrays) {
  let newArray = []; // pre defined and declare the newArray first to input

  for (const value of arrays) {
    newArray.push(value.toUpperCase());
  }

  return console.log(newArray);
}
newArrayWithUpperCase(colors);

function newArrayWithUpperCase2(arrays) {
  let newArray = [];

  for (let i = 0; i < arrays.length; i++) {
    newArray.push(arrays[i].toUpperCase());
  }

  return console.log(newArray);
}
newArrayWithUpperCase2(colors);

/* ### Task 9: Reverse Order (Challenge)

**It’s okay if you are not able to do it but please try.**
**Use a `for` loop**

Write a function that:
1. Takes an array
2. Prints elements from **last to first**

📌 Do NOT use `.reverse()`
**HINT:** You have to start at array length, Your condition must include 0, ****You have to use i--; 
*/

function reverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
reverse(colors);

/* ## FINAL TASK

### 🏁 Task 10: Length Checker

**Use ANY loop**

Write a function that:
1. Takes an array of strings
2. Prints only strings longer than **4 characters**

📌 Use `.length` on strings only

## 🧪 Example Function Call
printElements(["Toyota", "BMW", "Audi", "Tesla", "Mercedes", "Jeep", "Ford"]);
*/

function lengthChecker(addAnyStringArray, length) {
  let newArray = [];
  for (let i = 0; i < addAnyStringArray.length; i++) {
    let countLength = addAnyStringArray[i].length;
    if (countLength === length) {
      newArray.push(addAnyStringArray[i]);
    }
  }
  return newArray;
}
console.log(lengthChecker(colors, 5));
