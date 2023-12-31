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
  } else if (operator === "/" && secondNumber === "0") {
    return "ERROR!";
  } else {
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
    if (document.querySelector(".display").innerText === "ERROR!") {
      operateString = "";
      displayText = document.querySelector(".display").innerText = "";
    }
    operateString += button.innerText;
    displayText = document.querySelector(".display").innerText += button.innerText;
  })
});

document.querySelector(".add").addEventListener("click", () => {
  if (document.querySelector(".display").innerText === "ERROR!") {
    operateString = "";
    displayText = document.querySelector(".display").innerText = "";
  }
  if (countOperator(operateString) >= 1 && operatorRegex.test(operateString.slice(-1)) === false) {
    toEqual();
  }
  operateString += "+";
  displayText = document.querySelector(".display").innerText += "+";
});

document.querySelector(".subtract").addEventListener("click", () => {
  if (document.querySelector(".display").innerText === "ERROR!") {
    operateString = "";
    displayText = document.querySelector(".display").innerText = "";
  }
  if (countOperator(operateString) >= 1 && operatorRegex.test(operateString.slice(-1)) === false) {
    toEqual();
  }
  operateString += "-";
  displayText = document.querySelector(".display").innerText += "−";
});

document.querySelector(".multiply").addEventListener("click", () => {
  if (document.querySelector(".display").innerText === "ERROR!") {
    operateString = "";
    displayText = document.querySelector(".display").innerText = "";
  }
  if (countOperator(operateString) >= 1 && operatorRegex.test(operateString.slice(-1)) === false) {
    toEqual();
  }
  operateString += "*";
  displayText = document.querySelector(".display").innerText += "×";
});

document.querySelector(".divide").addEventListener("click", () => {
  if (document.querySelector(".display").innerText === "ERROR!") {
    operateString = "";
    displayText = document.querySelector(".display").innerText = "";
  }
  if (countOperator(operateString) >= 1 && operatorRegex.test(operateString.slice(-1)) === false) {
    toEqual();
  }
  operateString += "/";
  displayText = document.querySelector(".display").innerText += "÷";
});

function countDot(string) {
  return string.replace(/[^.]/g, "").length;
}

function toEqual() {
  if (countOperator(operateString) === 2 && operateString.charAt(0) === "-" && operateString !== "" && operateString.split(operatorRegex)[2] !== "") {
    let operator = operateString.match(operatorRegex);
    let numbers = operateString.split(operatorRegex);
    if (countDot(numbers[1]) > 1 || countDot(numbers[2]) > 1) {
      operateString = "";
      displayText = "";
      document.querySelector(".display").innerText = "ERROR!";
    } else {
    numbers[1] = "-" + numbers[1];
    let result = operateString = String(operate(numbers[1], operator[1], numbers[2]));
    displayText = document.querySelector(".display").innerText = result;
    }

  } else if (countOperator(operateString) <= 1 && operateString !== "" && operateString.split(operatorRegex)[1] !== "") {
    let numbers = operateString.split(operatorRegex);
    let operator = operateString.match(operatorRegex);
    if (countDot(numbers[0]) > 1 || countDot(numbers[1]) > 1) {
      operateString = "";
      displayText = "";
      document.querySelector(".display").innerText = "ERROR!";
    } else {
      let result = operate(numbers[0], operator[0], numbers[1]);
      if (result === "ERROR!") {
        operateString = "";
        displayText = "";
        document.querySelector(".display").innerText = result;
      } else {
        operateString = String(result);
        displayText = String(result);
        document.querySelector(".display").innerText = result;
      }
    }

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

document.querySelector(".delete").addEventListener("click", () => {
  if (document.querySelector(".display").innerText === "ERROR!" || document.querySelector(".display").innerText === "") {
    operateString = "";
    displayText = document.querySelector(".display").innerText = "";
  }
  operateString = operateString.substring(0, operateString.length - 1);
  document.querySelector(".display").innerText = document.querySelector(".display").innerText.slice(0, -1);
});

document.querySelector("body").addEventListener("keydown", (event) => {
  for (let i = 0; i < 10; i++) {
    if (event.key === `${i}`) {
      event.preventDefault();
      document.getElementById(`${i}`).click();
    }
  }
  if (event.key === "+") {
    event.preventDefault();
    document.querySelector(".add").click();
  } else if (event.key === "-") {
    event.preventDefault();
    document.querySelector(".subtract").click();
  } else if (event.key === "*") {
    event.preventDefault();
    document.querySelector(".multiply").click();
  } else if (event.key === "/") {
    event.preventDefault();
    document.querySelector(".divide").click();
  } else if (event.key === ".") {
    event.preventDefault();
    document.getElementById("dot").click();
  } else if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".equal").click();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    document.querySelector(".delete").click();
  } else if (event.key === "Delete") {
    event.preventDefault();
    document.querySelector(".clear").click();
  }
});