function add(a, b) {
  return +a + +b;
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
const operatorRegex = /[\+\-\*\/]/g;

function countOperator(string) {
  return ((string || '').match(operatorRegex) || []).length;
}

document.querySelectorAll(".notEqual").forEach((button) => {
  button.addEventListener("click", () => {
    operateString += button.innerText;
    displayText = document.querySelector(".display").innerText += button.innerText;
  })
});

document.querySelector(".add").addEventListener("click", () => {
  if (countOperator(operateString) >= 1) {
    toEqual();
  }
  operateString += "+";
  displayText = document.querySelector(".display").innerText += "+";
});

document.querySelector(".subtract").addEventListener("click", () => {
  if (countOperator(operateString) >= 1) {
    toEqual();
  }
  operateString += "-";
  displayText = document.querySelector(".display").innerText += "−";
});

document.querySelector(".multiply").addEventListener("click", () => {
  if (countOperator(operateString) >= 1) {
    toEqual();
  }
  operateString += "*";
  displayText = document.querySelector(".display").innerText += "×";
});

document.querySelector(".divide").addEventListener("click", () => {
  if (countOperator(operateString) >= 1) {
    toEqual();
  }
  operateString += "/";
  displayText = document.querySelector(".display").innerText += "÷";
});

function toEqual() {
  if (countOperator(operateString) === 2 && operateString.charAt(0) === "-") {
    let operator = String(operateString.match(operatorRegex).splice(1));
    let numbers = operateString.split(operatorRegex);
    numbers.splice(0, 1);
    numbers[0] = "-" + numbers[0];
    let result = operateString = String(operate(numbers[0], operator, numbers[1]));
    document.querySelector(".display").innerText = result;

  } else if (countOperator(operateString) <= 1) {
    let numbers = operateString.split(operatorRegex);
    let operator = operateString.match(operatorRegex);
    let result = document.querySelector(".display").innerText = operate(numbers[0], operator[0], numbers[1]);
    operateString = result;

  } else {
    operateString = "";
    document.querySelector(".display").innerText = "ERROR!";
  }
}

document.querySelector(".equal").addEventListener("click", () => {
  toEqual();
});

document.querySelector(".clear").addEventListener("click", () => {
  operateString = "";
  displayText = "";
  document.querySelector(".display").innerText = "";
});