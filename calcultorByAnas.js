function add(num1, num2) {
  return num1 + num2;
}

// Define a function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Define a function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return num1 / num2;
}


export default [add, subtract, divide];
