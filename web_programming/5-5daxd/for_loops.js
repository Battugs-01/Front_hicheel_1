// for loop
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// this is very ugly
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // this is much better
// for (const fruit of fruits) {
//   console.log(fruit);
// }

const numbers = [1, 2, 3];

const result = [];
// doouble all the numbers in the array
for (const number of numbers) {
  result.push(number * 2);
  // console.log(number * 2);
}
console.log(result);

const Double = (number) => {
  let result = [];
  for (const num of number) {
    result.push(num * 2);
  }
  return result;
};

console.log(Double([1, 2, 3, 4, 5]));

// sum up all the numbers in the array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let sum2 = 0;
for (const number of numbers) {
  sum2 += number;
}
console.log(sum2);
