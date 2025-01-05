// Lesson 2
// 1. Data Types
// numbers => 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
// string => "Hello World" , "Battugs Choijil" , "Nice to meet you"
// boolean => true , false
// array => [1,2,3,4,5,6,7,8,9,10]
// object => {name : "Choijil Battugs" , age : 25 , country : "Mongolia"}

// 2 Math Operations
// Multiplication *
// Division /
// Exponentiation **
// Modulus % 5 % 2 = 1
// Addition +
// Subtraction -

// 3 Math Methods
// Math.floor()
console.log(Math.floor(1.9));
// Math.ceil()
console.log(Math.ceil(1.1));
// Math.round()
console.log(Math.round(1.1));
// Math.random()
console.log(Math.random() * 3);

// Data Types of variables (var , let , const)

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

let x = 10;
x = 20;

console.log(x);
const y = 10;
// y = 20; // Error

//Build with small weather app
let weather = "rainy";

if (weather === "rainy") {
  console.log("grab your umbrella ");
} else if (weather === "cloudly") {
  console.log("Wear your jacket");
} else {
  console.log("Wear your sunglasses");
}
