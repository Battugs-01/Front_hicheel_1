// Object properties
// object is a collection of key-value pairs
const person = {
  name: "John Doe",
  age: 32,
  shirt: "white",
};

console.log(person);

// access object properties : dot notation and bracket notation
console.log(person.name);
console.log(person["age"]);

// assign object
person.phone = "88888881";
console.log(person.phone);

const person2 = {
  name: "Choijil Battugs",
  age: 22,
  face: "handsome",
};

console.log(person2);
console.log(person2.face);

const introducer = (name, age, face) => {
  const person = {
    name: name,
    age: age,
    face: face,
    assets: 1000000,
    liabilities: 500000,
    // netWorth: assets - liabilities,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hello my name is ${person.name} and I am ${
    person.age
  } years old and I am ${person.face} and my net worth is ${person.netWorth()}`;

  return intro;
};

console.log(introducer("Choijil Battugs", 22, "handsome and cute"));
