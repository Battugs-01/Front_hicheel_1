// Tip Calculator

// function CalculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100;
//   tipAmount = total * tipPercentage;
//   total = food + tipAmount;
//   return total;
// }

function calculateTip(total, tip) {
  return total * (tip / 100);
}

function totalAmount(food, tip) {
  return food + tip;
}

function calculateFoodTotal(food, tip) {
  tipAmount = calculateTip(food, tip);

  total = totalAmount(food, tipAmount);

  return total;
}

console.log(calculateFoodTotal(100, 10));

// ES6 Arrow Functions
// Arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b;
};

// Arrow function with implicit return
const sumArrow2 = (a, b) => a + b;
