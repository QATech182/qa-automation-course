/* Week 3 - Assignment 3

# Homework 2: OBJECTS ONLY
**File:** `objects-practice.js`

## 📌 Rules
- ❌ Do NOT copy objects from slides
- ❌ Do NOT use loops unless explicitly asked
- ✅ Create your own object
- ✅ Use `this` inside object methods

## PART 1: CREATE AN OBJECT

### 🧱 Task 1: Object Creation

Create **one object** that represents something of your choice. (Examples: car, student, phone, video game, book, movie, etc.)
Your object must include:
- At least **4 properties**
- At least **1 string**
- At least **1 number**
- At least **1 nested object**
*/

const student = {
  "first name": "Eric",
  age: 42,
  isStudent: true,
  address: {
    city: "Brooklyn",
    state: "NY",
    zip: "11229",
  },
};

// console.log(student.age); // dot notation
// console.log(student["address"]); // bracket notation
// console.log(student.address.state);
// console.log(student["first name"]);

/* ## PART 2: OBJECT METHODS

### ⚙ Task 2: Description Method

Add a method that:
1. Uses `this`
2. Returns a sentence describing the object
*/

student.info = function () {
  console.log(
    `Student name is ${this["first name"]} and ${this.age} years old and live in ${this.address.city} right now!`,
  );
};
student.info();

/* ### Task 3: Update Method

Add a method that:
1. Takes **parameters**
2. Updates one property using `this`
3. Returns the updated value
*/

student.ageUpdate = function (age) {
  console.log(`Student Current Age this year is ${(this.age = age)}.`);
};
student.ageUpdate(43);

/* ### Task 4: Calculation Method

Add a method that:
1. Uses `this`
2. Performs a calculation
3. Returns the result
*/

student.monthlyExpense = 1500;
student.expensePerYear = function () {
  console.log(`Student Expense Per Year is: ${this.monthlyExpense * 12}.`);
};
student.expensePerYear();

/* ## PART 3: OBJECT ACCESS

### 🔑 Task 5: Dot vs Bracket

Access **two properties** using:
- dot notation
- bracket notation
*/

console.log(student.age);
console.log(student.address.city);

console.log(student["age"]);
console.log(student["first name"]);

/* ### Task 6: Property Checker

Write a function (outside the object) that:
1. Takes an object and a property name
2. Uses the `in` operator
3. Returns whether the property exists
*/

function searchPropertyInObject(object, properties) {
  console.log(properties in object);
}
searchPropertyInObject(student, "age");

/* ## PART 4: OBJECT METHODS PRACTICE

### 🔄 Task 7: Method Calls

1. Call **each object method**
2. Store the returned values
3. Print them to the console
*/

student.info = function () {
  return `Student name is ${this["first name"]}, ${this.age} years old, and lives in ${this.address.city}.`;
};

student.change = function (age) {
  this.age = age;
  return this.age;
};

console.log(student.info());
console.log(student.change(56));

/* ## PART 5: PROPERTY MANIPULATION

### ✏ Task 8: Add a New Property
- Add a new property to your object **without using a method**
- Print the object to see the added property

### ✏ Task 9: Update a Property Directly
- Update an existing property directly (not through a method)
- Print the updated value

### ✏ Task 10: Delete a Property
- Delete one property from your object
- Print the object to confirm it’s removed
*/

student.id = 123456;
console.log(student.id);

student.age = 45;
console.log(student.age);

delete student.address.zip;
console.log(student.address);

// ## PART 6: OBJECT UTILITY METHODS

// 🛠 Task 11: List Object Keys

// List all keys
const keys = Object.keys(student);
console.log(keys);

// Check if a specific key exists
console.log(keys.includes("age"));
console.log(keys.includes("first Name"));

// 🛠 Task 12: List Object Values

// List all values
const values = Object.values(student);
console.log(values);

// Check if a specific value exists
console.log(values.includes(42));
console.log(values.includes("Eric"));
console.log(values.includes("London"));

// 🛠 Task 13: List Object Entries

// List entries (key-value pairs)
const entries = Object.entries(student);
console.log(entries);

// Flatten the entries array
const flattened = entries.flat();
console.log(flattened);

// PART 7: NESTED OBJECT PRACTICE
// Task 14: Access Nested Properties
console.log(student.address.city); // Brooklyn
console.log(student.address.state); // NY

// Task 15: Update Nested Properties

// Update nested property
student.address.city = "Queens";

// Print updated nested object
console.log(student.address);
