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
console.log("Division:", divide(8, 2));
console.log("Division:", divide(4, 2));
console.log("Division:", divide(80, 2));
console.log("Division:", divide(23, 2));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// added again you know

console.log("asdf6");
console.log("asdf7");
console.log("asdf8");
console.log("asdf9");



















console.log('changed');