// 1. String

const name = "Eric";
const myName = "Tohir"; // single quote that can convert to
const studentName = `Richard`;

console.log(name);
console.log(myName);
console.log(studentName);

// 2. Number

const birthYear = 1980;
const carModel = 2024;
const studentScore = 90.5;

console.log();

// 3. Boolean

let isLightOn = false; // the

console.log("Is the light on?", isLightOn);

// Later, someone come and turn on the light

isLightOn = true;

console.log("Is the light on?", isLightOn);

// 4 Null
// in the assigned seat

let seatOwner = null; // null can be any data types

console.log("Seat status", seatOwner);

seatOwner = "Eric";

console.log("Seat status", seatOwner);

// 5. Undefined

//let studentPresent;

// before teacher
//console.log("Student Present", studentPresent);

//studentPresent = Yes;
//console.log("Student Present", studentPresent);

// 5. Array

const colors = ["red", "green", "blue"];
const studentScores = [78, 54, 65, 42];

//console.log(studentScores[0])

// Object inside another Object
const myColors = {
  name: "Eric",
  age: 45,
  isSoccerPlayer: true,
  favouriteFruits: ["banana0", "mango", "apple"],
  city: {
    country: "Myanmar",
    zipCode: "11358",
  },
};

//console.log(myColors);
console.log(myColors.city);
