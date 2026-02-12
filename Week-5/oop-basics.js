// Example 1 - class
class Person {
  //constructor is mandatory
  constructor(name, age, birthYear) {
    this.name = name;
    this.age = age;
    this.birthYear = birthYear;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }

  ageCalculation() {
    const currentYear = new Date().getFullYear();
    const ageResult = currentYear - this.birthYear;
    console.log(`This year, ${this.name} will be ${ageResult} years old.`);
    return ageResult;
  }
}

// instance of the Person class => instantiation
const alice = new Person("Alice", 25, 2000);
alice.greet();
console.log(alice);
alice.ageCalculation();

const bob = new Person("Bob", 30, 1983);
bob.greet();
console.log(bob);
bob.ageCalculation();

// Example 2
class Phone {
  //constructor is mandatory
  constructor(brand, model, storage) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
  }

  describe() {
    console.log(
      `${this.greetCustomer()} This phone is a ${this.brand} ${this.model} and has a strorage of ${this.storage}`,
    );
  }

  greetCustomer() {
    return "Hello, Customer, this is your new phone. Please enjoy!!!";
  }
}

const iPhone17 = new Phone("Apple", "iPhone 17", "512GB");
const redmiNote11 = new Phone("Mi", "Redmi Note 11 Pro", "256GB");

console.log(iPhone17);
iPhone17.describe();

console.log(redmiNote11);
redmiNote11.describe();

// without constructor
class Student {
  intro() {
    console.log("Hello this is without constructor");
  }
}

const student = new Student();
student.intro();
