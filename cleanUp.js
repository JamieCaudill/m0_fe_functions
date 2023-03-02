// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?"); 
}

askForName();

// Move console.log to next line, added semi-colons and moved } to next line because that is the proper syntax.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// Indent lines 21 and 22 and added semicolons. Check code with console.log.

// // EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
}

makeFreshPesto();

// Change 'func' to 'function.' Space before {. Moved } from line 36 to 37.

// //  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}

console.log(average(4, 8));

// Add semicolon line 49. Move { from line 45 to 44. Indent line 45. Delete extra indent line 46. Move return up a line and indent. move } up a line and delete extra indent. Check code with console.log.