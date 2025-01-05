console.log("hello world");

// const title = document.getElementById("title");
// console.log(title);

// console.log(title.innerHTML);

// let message = "Hello my lovers";
// title.innerText = message;

// console.log(title.innerHTML);

// let message2 = `<p>Hello my haters</p>`;
// title.innerHTML = message2;

// title.style.color = "red";
// title.style.backgroundColor = "black";
let redDiv = document.getElementById("red");
let blueDiv = document.getElementById("blue");
let greenDiv = document.getElementById("green");

// JS es 5 4
// redDiv.onclick = function () {
//   console.log("Red Div Clicked");
// };

// JS es 6
redDiv.onclick = () => {
  console.log("Red Div Clicked");
  // Your computer choose another button
  // function -1 , 0 , 1
  // show everything in the browser
};

buttons = document.querySelectorAll(".colorButton");
// console.log(button, "button");
// console.log(button[0].value);
// console.log(button[1].value);
// console.log(button[2].value);

timesClicked = { red: 0, yellow: 0, blue: 0 };

buttons.forEach((button) => {
  button.onclick = () => {
    timesClicked[button.value]++;
    button.innerText = timesClicked[button.value];
  };
});

let clearButton = document.getElementById("clear-game");

clearButton.onClick = () => {
  clearScores();
};
