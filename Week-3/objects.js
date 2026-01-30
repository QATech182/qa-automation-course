// 1. looping over object

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    // person.greet is method - function inside the object is called the method
    console.log(`Hello, my name is ${person.name}`);
  },
  bye() {
    console.log("I am Alice, bye");
  },
};

for (const key in person) {
  // in instead of for-of-loop
  // console.log(`${key}: ${person[key]}`);
  console.log(key + ": " + person[key]); // person[key] = value
}

// 2. "in" keyword - checks if a key exists

console.log("name" in person);
console.log("weight" in person);

// 3. Accessing objecct values

console.log(person.name);
console.log(person.age);

// or

// console.log(person."name");
// console.log(person.age);

// 4. Adding and Updating properties
console.log(person);

// Adding - if a key does not exist then it adds it to the object
person.height = 170;
console.log(person);

// Updating - if a keys exists, then it updates the value of the specific key inside the object
person.age = 30;
console.log(person);

// "delete" keyword - Removing  properties
delete person.height;
console.log(person);

// 6. object method
person.greet();
person.bye();

// 7. Using "this" keyword

const car = {
  brand: "Tela",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  },
};

car.brand;
car.speed;
car.info();

// ***** do not use the arrow function inside the object

// Built-in Object Methods

const soccerPlayer = {
  name: "Ronaldo",
  age: 43,
  country: "Mexico",
};

console.log(Object.keys(soccerPlayer));
console.log(Object.values(soccerPlayer));
console.log(Object.entries(soccerPlayer)); // pairs
