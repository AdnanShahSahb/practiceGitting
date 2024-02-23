function add(num1, num2) {
  return num1 + num2;
}

// Define a function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}
// Define a function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Define a function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return num1 / num2;
}
// Test the calculator functions
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(2, 6));
console.log("Division:", divide(8, 2));
