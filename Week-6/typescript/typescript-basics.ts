/*
# 🔹 PART 1: BASIC TYPES

## Task 1: String Variables

1. Create a variable called `studentName`
2. Assign it your name
3. Give it the correct type

Then:

4. Create another variable called `course`

5. Assign it a string value
*/

let studentName: string = "Eric";
let course = "QA";

/*
## Task 2: Number Variables

1. Create a variable `age`
2. Assign it a number
3. Create another variable `price`
4. Assign it a decimal number
*/

let age: number = 42;
let price: number = 39.99;

/*
## Task 3: Boolean Variables

1. Create a variable `isStudent`
2. Assign it a boolean value
3. Create another variable `isOnline`
4. Assign it a boolean value
 */

let isStudent = true;
let isOnline = false;

/*
# 🔹 PART 2: THE `any` TYPE

## Task 4: Flexible Variable

1. Create a variable called `randomValue`
2. Give it the type `any`
3. Assign:
    - a number
    - then a string
    - then a boolean
 */
let randomValue: any = 25;
randomValue = "Hello";
randomValue = true;

/*
# 🔹 PART 3: TYPE INFERENCE

## Task 5: Let TypeScript Guess the Type

1. Create a variable called `city`
2. Assign it a string
3. Do **not** specify the type

Then:

4. Try assigning a number to it

5. Observe the TypeScript error
 */

let city = "New York";
// city = 25;

/*
# 🔹 PART 4: TYPED ARRAYS

## Task 6: String Array

1. Create an array called `carBrands`
2. It must only store strings
3. Add at least 4 car brands
*/

let carBrands: string[] = ["Tesla", "Honda", "Kia", "Toyota"];

/*
## Task 7: Number Array

1. Create an array called `scores`
2. It must only store numbers
3. Add at least 5 numbers
*/

let scores: number[] = [25, 34, 78, 954, 857, 5];

/*
# 🔹 PART 5: TYPED OBJECTS

## Task 8: Simple Object

Create an object called `user` with these properties:

- name (string)
- age (number)
- isAdmin (boolean)

Type the object correctly.
*/

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "eric",
  age: 42,
  isAdmin: false,
};

/*
## Task 9: Product Object

Create an object called `product` with:

- title (string)
- price (number)
- inStock (boolean)

Type the object correctly.
*/

let product: {
  title: string;
  price: number;
  inStock: boolean;
} = {
  title: "food",
  price: 39.99,
  inStock: true,
};

/*
# 🔹 FINAL MINI-CHALLENGE

## Task 10: Real-World Data

1. Create an array called `students`
2. Each item must be an object with:
    - name (string)
    - age (number)
    - isActive (boolean)
3. Add at least **three students**
*/

let students: [
  { "student name": string; major: string },
  { age: number },
  { isActive: boolean },
] = [
  { "student name": "eric", major: "Business" },
  { age: 42 },
  { isActive: true },
];

console.log(students[0]["student name"]);
