function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

let operateString = "";
let displayText;

document.querySelectorAll(".notEqual").forEach((button) => {
  button.addEventListener("click", () => {
    operateString += button.innerText;
    displayText = document.querySelector(".display").innerText += button.innerText;
  })
});

document.querySelector(".add").addEventListener("click", () => {
  operateString += "+";
  displayText = document.querySelector(".display").innerText += "+";
});

document.querySelector(".subtract").addEventListener("click", () => {
  operateString += "-";
  displayText = document.querySelector(".display").innerText += "−";
});

document.querySelector(".multiply").addEventListener("click", () => {
  operateString += "*";
  displayText = document.querySelector(".display").innerText += "×";
});

document.querySelector(".divide").addEventListener("click", () => {
  operateString += "/";
  displayText = document.querySelector(".display").innerText += "÷";
});

document.querySelector(".equal").addEventListener("click", () => {
  let numbers = operateString.split(/[\+\-\*\/]/g);
  let operator = operateString.match(/[\+\-\*\/]/g);
  document.querySelector(".display").innerText = "";
  let result = document.querySelector(".display").innerText += operate(numbers[0], operator[0], numbers[1]);
  operateString = result;
});

document.querySelector(".clear").addEventListener("click", () => {
  operateString = "";
  displayText = "";
  document.querySelector(".display").innerText = "";
});