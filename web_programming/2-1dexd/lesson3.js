// Lesson 3
// 1. Functions Функц
function sayMyName() {
  console.log("Choijil Battugs");
}

sayMyName();

// Dynamic function
function sayName(name) {
  console.log(name);
}
sayName("Battugs is God");

function greeting(name) {
  console.log("Hi name , Nice to meet you");
}
greeting("Battugs");

function greeting2(name) {
  let sentence = "Hi " + name + ", Nice to meet you";
  console.log(sentence);
}
greeting2("Battugs");

function greeting3(name) {
  let sentence = `Hi ${name}, Nice to meet you`;
  console.log(sentence);
}
greeting3("Tugsuu");

function add(a, b) {
  let sum = a + b;
  console.log(sum);
}
add(5, 10);

function returnAdd(a, b) {
  let sum = a + b;
  return sum;
}
data = returnAdd(5, 10);
console.log(data);

function multiply(a, b) {
  let product = a * b;
  console.log(product);
}
mulData = multiply(5, 10);
console.log(mulData);
