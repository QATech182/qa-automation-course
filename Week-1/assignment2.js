console.log(
  "============ Part A: Data Types (Concept + Practice) ============",
);
console.log("============ 1. Identify the Data Type ============");

// "Hello World"
let stringDataType = "Hello World";
console.log(stringDataType + " is a string data type.");

// 42
let numberDataType = 42;
console.log(numberDataType + " is a integer data type.");

// true
let isThisBooleanTrue = true;
console.log(
  isThisBooleanTrue +
    " - This true/false is boolean data type and variable starts with IsThisBooleanTrue",
);

// null
let dataTypeNull = null;
console.log(
  dataTypeNull +
    " - This is Null data type and we can assign anythings later in the application where necessary.",
);

// undefined
let dataTypeUndefined;
console.log(dataTypeUndefined + " - This is data type undefined.");

// [1, 2, 3]
const arrayDataType = [1, 2, 3];
console.log(
  "[" +
    arrayDataType +
    "] - This is Array Data Type and Array starts from index 0 which is not 1's position.",
);

// { name: "Alex", age: 20 }
const myCustomer = {
  name: "Alex",
  age: 20,
};
console.log(myCustomer);
console.log(
  "This is object data type and can include many data type together in one object. Example as follows: ",
);

console.log(
  "'My customer name is " +
    myCustomer.name +
    " and he is " +
    myCustomer.age +
    " years old.'",
);

// ============================================

console.log("============ 2. Create Variables ============ ");

// A **string** for your favorite movie
let myFavouriteMovie = "Supermen Return";
console.log("My favourite movie in 2025 is " + myFavouriteMovie);
myFavouriteMovie = "Rental Family";
console.log("My favourite movie in 2026 is " + myFavouriteMovie);

// A **number** for your age
let myAge = 42;
console.log("I am now " + myAge);
myAge = 43;
console.log("And I am going to be " + myAge + " in coming Nov 2026.");

// A **boolean** for whether you like JavaScript
let IsJavaScriptIsEasytoStudy = true;
console.log(
  "Is JavaScript easy to study for beginner? " + IsJavaScriptIsEasytoStudy,
);
IsJavaScriptIsEasytoStudy = false;
console.log(
  "Is JavaScript very difficult for QA? " + IsJavaScriptIsEasytoStudy,
);

// A variable with **undefined** value
let myQAFirstJobSalary;
console.log(
  "I do not know for my QA first job salary yet? So, my salary amount is " +
    myQAFirstJobSalary,
);
myQAFirstJobSalary = 85000;
console.log(
  "After passing the interview, I got notified how much their offer per annual and which is now defined as " +
    myQAFirstJobSalary +
    " per year with full benefit.",
);

// A variable with **null** value
let myHome = null;
console.log("I do not own any home in US so my home total is " + myHome);
myHome = 1;
console.log(
  "After 3 years in US with good credit standing and QA job, I can buy a new home so I will have a total of " +
    myHome +
    " home in US in coming 2027/2028.",
);

// ============================================

console.log("============ 3. Primitive vs Non-Primitive ============ ");

// a) Which of the following are **primitive** and which are **non-primitive**?

let a = "JS"; // primitive data type
let b = [10, 20]; // non-primitive data type
let c = 100; // primitive data type
let d = { city: "Paris" }; // non-primitive data type

// b) Explain in **1–2 sentences** why arrays and objects are called *non-primitive*.
// Ans: Arrays and objects are non-primitive because they are mutable and stored by reference,
// allowing their contents to be changed without creating a new value like other primitive data types.
// This makes them suitable for managing complex and dynamic data structures.

console.log(
  "Explain in 1–2 sentences why arrays and objects are called non-primitive?",
);
console.log(
  "Ans: Arrays and objects are non-primitive because they are mutable and stored by reference, allowing their contents to be changed without creating a new value like other primitive data types. This makes them suitable for managing complex and dynamic data structures.",
);

console.log("============ 4. Modify the Value ============ ");

let x = "Hello";
let y = x;
y = "Hi";

// a) What is the value of `x`?
console.log("The value of x is " + x);

// b) Is this an example of primitive or non-primitive behavior? Why?
console.log(
  "This is primitive string data type and immmutable and stored as a value not reference like Arrays and Objects which are non primitive data type and mutable so y cannot be equal to x. x value cannot be changed to 'Hi' but if you want to point to new value 'Hi', you can reassign with x = 'Hi' and in this way, this x will be printed out as 'Hi'.",
);

console.log("============ 5. Array ============ ");

// Array 1 : Strings
const myQASubjects = ["Fundemental", "Finance", "Tools", "Automation"];
console.log(myQASubjects);

// Array 2: Numbers
const myCreditCardPayment = [30, 50, 65, 120, 180];
console.log(myCreditCardPayment);

// Array 3: Mixed Data Types
const mixedData = ["Eric", 1983, true, null, 2560];
console.log(
  "What is your name? Ans: " +
    mixedData[0] +
    " | When did you born? Ans: " +
    mixedData[1] +
    " | Are you living in New York now? Ans: " +
    mixedData[2] +
    " | Do you receive QA job salary? Ans: " +
    mixedData[3] +
    " | What is your monthly expense? Ans: " +
    mixedData[4],
);

// Note:
// I use const for arrays because I don’t want to reassign the variable itself, even though the array’s contents can still change.
// const prevents reassignment
// const does NOT make arrays immutable and can be updated later where necessary.

console.log("============ 6. Object ============ ");

// Object 1:
const myPhone = {
  name: "iphone 16 Pro Max",
  storage: [256, 512],
  price: 1100,
};

console.log(
  "My current phone is " +
    myPhone.name +
    " with storage of " +
    myPhone.storage[0] +
    " and which purchased price is " +
    myPhone.price,
);

// Object 2:
const myQATools = {
  testManagement: ["JIRA", "Zephyr"],
  apiTesting: "Postman",
  automation: ["TypeScripts", "Playwright"],
  databases: "MySQL",
  environments: ["Dev", "QA", "UAT", "Prod"],
};

console.log(
  "I have learnt my test Managment with " +
    myQATools.testManagement[0] +
    " and " +
    myQATools.testManagement[1] +
    " in the " +
    myQATools.environments[1] +
    " environment.",
);

// Object 3:

const myProperty = {
  location: "Brooklyn",
  sizepersqft: 2500,
  rentalfee: 3000,
  contract: ["12 months", "6 months"],
  howmanyroom: "3 rooms",
  isAllInclusive: true,
};

console.log(
  "My home in " +
    myProperty.location +
    " is contract with " +
    myProperty.contract[0] +
    " and monthly fee is " +
    myProperty.rentalfee,
);

console.log("============ Part B: Control Flow ============ ");
console.log("============ 7. If Statement ============ ");

// - Checks if a number is **positive**
// - Prints `"Positive number"` if true
let checkNumber = 12;
if (checkNumber >= 0) {
  console.log(checkNumber);
}

console.log("============ 8. If – Else Statement ============ ");

let isMyComputerIsOn = true;
if (isMyComputerIsOn) {
  console.log("The computer is ON. You can start working.");
} else {
  console.log("The computer is OFF. Please turn it on.");
}

isMyComputerIsOn = false;
if (isMyComputerIsOn) {
  console.log("The computer is ON. You can start working.");
} else {
  console.log("The computer is OFF. Please turn it on for studying.");
}

console.log("============ 9. Else If Statement ============ ");

let myStudentScore = 85;

if (myStudentScore > 90) {
  console.log("Grade A");
} else if (myStudentScore > 80) {
  console.log("Grade B");
} else if (myStudentScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

console.log("============ 10. Switch Statement ============ ");
console.log("============ First Example with break! ============");

let computerStatus = "sleep";
switch (computerStatus) {
  case "on":
    console.log("Computer is ON. You can work.");
    break;

  case "sleep":
    console.log("Computer is in sleep mode.");
    break;

  case "off":
    console.log("Computer is OFF. Please turn it on.");
    break;

  default:
    console.log("Unknown computer status.");
}

console.log("============ Second Example without break! ============");

computerStatus = "on";
switch (computerStatus) {
  case "on":
    console.log("Computer is ON. You can work.");
  case "sleep":
    console.log("Computer is in sleep mode.");
  case "off":
    console.log("Computer is OFF. Please turn it on.");
  default:
    console.log("Unknown computer status.");
}

console.log("============ 11. Challenge ============ ");

let number = 9;

if (number < 0) {
  console.log("Negative number, we don't care!");
} else if (number < 10) {
  console.log("Single digit number!");
} else if (number < 100) {
  console.log("Double digit number!");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else!",
  );
}

// Test 2

// Test 3
