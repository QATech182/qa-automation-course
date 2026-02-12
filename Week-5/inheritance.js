class Car {
  drive() {
    console.log("Driving...");
  }
}

class SportsCar extends Car {
  turboBoost() {
    console.log("Turbo boost activated!");
  }
}

const ferrari = new SportsCar();

ferrari.drive();
ferrari.turboBoost();
