// OOP Homework – Classes, Methods, Inheritance & Advanced Concepts

console.log("============ Part 1 ============");

// 🔹 PART 1: CLASS FUNDAMENTALS

/* ## 🚗 Task 1: Create a Car Class

Create a class called `Car` that:

1. Has a constructor with:
    - brand
    - price
2. Includes a **private fuel property**:
    - `#fuelLevel`
    - Starts at 100
3. Has these methods:
    - `drive()` → reduces fuel by 10
    - `refuel()` → sets fuel back to 100
    - `getInfo()` → returns a sentence about the car

📌 Must use `this` inside every method.

*/

class Car {
  //static properties belong to the class itself not individual objects.
  static totalCars = 0;
  #fuelLevel;
  constructor(brand, price, fuelLevel) {
    this.brand = brand;
    this.price = price;
    this.#fuelLevel = fuelLevel;

    // increase counter every time a car is created
    Car.totalCars++;
  }

  static showTotalCars() {
    console.log(`Total Cars: ${Car.totalCars}`);
  }

  drive() {
    // to prevent the negative fuelevel
    if (this.#fuelLevel <= 0) {
      console.log(`${this.brand} cannot drive. No fuel left!`);
    } else {
      this.#fuelLevel -= 10;
      console.log(`${this.brand} is driving. Fuel Level: ${this.#fuelLevel}`);
    }
  }

  refuel() {
    this.#fuelLevel = 100;
    console.log(
      `${this.brand} has been refueled. Fuel Level: ${this.#fuelLevel}`,
    );
  }

  getInfo() {
    console.log(`This car is a ${this.brand} and price is $${this.price}.`);
  }

  #consumeFuel() {
    console.log(this.#fuelLevel - 10);
  }
}

const myCar = new Car("KIA", 25000, 80);

myCar.drive();
myCar.refuel();
myCar.drive();
myCar.getInfo();

/*
## 🚗 Task 2: Methods with Parameters

Add these methods to the `Car` class:

1. `discount(amount)`
    - Reduces the price by the given amount
2. `isExpensive(limit)`
    - Returns:
        - `"Expensive"` if price is above the limit
        - `"Affordable"` otherwise
*/

myCar.discount = function (amount) {
  if (amount < 0) {
    console.log(`This ${amount} discount amount is incorrect! Double check!`);
  } else {
    const finalSales = this.price - amount;
    console.log(
      `This ${this.brand} brand final sales after discount $${amount} is: $${finalSales}`,
    );
  }
};

myCar.discount(10000);
myCar.getInfo();

myCar.isExpensive = function (limit) {
  if (this.price > limit) {
    console.log(`This ${this.brand} car is expensive and above the budget!`);
  } else {
    console.log(`This ${this.brand} car is affordable for me!`);
  }
};

myCar.isExpensive(30000);

console.log("============ Part 2 ============");

/*
# 🔹 PART 2: ENCAPSULATION (GETTERS & SETTERS)

## 🔐 Task 3: Controlled Price Access

Inside the `Car` class:

1. Create a **getter** called `priceTag`
    - Returns the price with a dollar sign
        
        Example: `$25000`
        
2. Create a **setter** called `updatePrice`
    - Accepts a new price
    - If the price is negative:
        - Set price to 0
    - Otherwise:
        - Update normally

📌 Use the both methods we learned in class 

`get` and `set` (1st method) we learned falls into encapsulation part also.
*/

myCar.getPriceTag = function () {
  return console.log(`$${this.price}`);
};

myCar.getPriceTag();

myCar.updatePrice = function (newprice) {
  this.price = newprice < 0 ? 0 : this.price + newprice;
  console.log(`New Price is: $${this.price}`);
};

myCar.updatePrice(-2000);
myCar.getPriceTag();

myCar.updatePrice(10000);
myCar.getPriceTag();

console.log("============ Part 3 ============");
/*
# PART 3: ABSTRACTION WITH PRIVATE METHODS

## 🧠 Task 4: Hidden Engine Logic

Modify the `Car` class so that:

1. Create a private method:
    - `#consumeFuel()`
2. This method:
    - Reduces fuel by 10
3. The `drive()` method:
    - Must call `#consumeFuel()`
    - Must NOT change fuel directly

📌 The user should only call `drive()`.
*/

class CarModify extends Car {
  // parent class private properties cannot be used from child class so we set it as 100
  #fuelLevel = 100;

  constructor(brand, price) {
    super(brand, price);
  }

  // Reduces fuel by 10
  #consumeFuel() {
    this.#fuelLevel -= 10;
  }

  drive() {
    if (this.#fuelLevel <= 0) {
      console.log(`${this.brand} cannot drive. No fuel left!`);
      return;
    }
    this.#consumeFuel();
    console.log(`${this.brand} is driving. Fuel Level: ${this.#fuelLevel}`);
  }
}

const carModify = new CarModify("KIA", 25000);
carModify.drive();
carModify.drive();

console.log("============ Part 4 ============");
/*
# 🔹 PART 4: STATIC PROPERTIES & METHODS

## ⚡ Task 5: Car Counter

Add to the `Car` class:

1. A static property:
    - `totalCars` (starts at 0)
2. Each time a new car is created:
    - Increase the counter
3. A static method:
    - `showTotalCars()`
    - Returns the number of cars created
*/

// direct calls from Car Class due to static property and method
const car1 = new Car("Telsa", 3000, 250);
Car.showTotalCars();

const car2 = new Car("Honda", 3000, 250);
Car.showTotalCars();

const car3 = new Car("Ford", 3000, 250);
Car.showTotalCars();

console.log("============ Part 5 ============");
/*
# 🔹 PART 5: INHERITANCE

## 🧬 Task 6: ElectricCar Class

Create a new class `ElectricCar` that:

1. Extends the `Car` class
2. Adds a new property:
    - batteryRange
3. Overrides the `drive()` method:
    - Reduces batteryRange by 20
4. Adds a new method:
    - `charge()` → sets batteryRange back to 100

📌 Must use `extends` and `super()`.
*/

class ElectricCar extends Car {
  constructor(brand, price, batteryRange) {
    super(brand, price, 0);
    this.batteryRange = batteryRange;
  }

  // drive method overwrite
  drive() {
    if (this.batteryRange <= 0) console.log(`${this.brand} battery empty!`);
    this.batteryRange -= 20;
    console.log(
      `${this.brand} is driving. BatterRange is: ${this.batteryRange}`,
    );
  }

  // New method charge()
  charge() {
    this.batteryRange = 100;
    console.log(`${this.brand} is fully charged ⚡. Battery Range: 100`);
  }
}

const eCar = new ElectricCar("Telsa", 2500, 0, 100);

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    eCar.drive();
  }, i * 1000);
}
