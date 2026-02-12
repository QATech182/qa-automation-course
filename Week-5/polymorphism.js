class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark!");
  }
}

const regularAnimal = new Animal();
regularAnimal.speak();

const cat = new Cat();
cat.speak();

const dog = new Dog();
dog.speak();
