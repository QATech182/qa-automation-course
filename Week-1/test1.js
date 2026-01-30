const myLuckyNumber = 7;
console.log(myLuckyNumber);

function introduce(person) {
  console.log("Hi my name is " + person.name);

  if (person.age >= 18) {
    console.log("I'm an adult");
  } else {
    console.log("I'm a minor");
  }
}

introduce({ name: "Eric", age: 25 });
