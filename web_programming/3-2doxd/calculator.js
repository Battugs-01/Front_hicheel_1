// Get the two numbers from the user
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

// Get the action to perform from the user
let action = prompt("Enter the action to perform (+, -, *, /, ^, %): ");

// Perform the action
let result;
switch (action) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      alert("Error: cannot divide by zero!");
      result = null;
    }
    break;
  case "^":
    result = Math.pow(num1, num2);
    break;
  case "%":
    if (num2 !== 0) {
      result = num1 % num2;
    } else {
      alert("Error: cannot divide by zero!");
      result = null;
    }
    break;
  default:
    alert("Error: invalid action!");
    result = null;
}

// Display the result
if (result !== null) {
  alert(`The result is: ${result}`);
}
