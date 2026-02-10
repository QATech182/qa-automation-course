// Example 1 - class
class Person {
  //constructor is mandatory
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }

  //   ageCalculation() {
  //     const ageResult = ${this.age} - now(Date);
  //     console.log(`Current age for ${this.name} is ${ageResult}`);
  //   }
}

// instance of the Person class => instantiation
const alice = new Person("Alice", 25);
alice.greet();
console.log(alice);
//alice.ageCalculation();

const bob = new Person("Bob", 30);
bob.greet();
console.log(bob);

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
