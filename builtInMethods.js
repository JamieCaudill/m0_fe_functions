// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// includes() checks the string to see if the input is within and returns a boolean
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// endsWith() checks the string to see if it ends with the input and returns a boolean
// The return value is false
"Hello World".endsWith("Hello");

// The return value of this one is true because "Hello World" does end with rld
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


var sport = "hockey";
var tool = "stick";

// The toUpperCase() method takes all characters in a string and makes them upper case and returns them. 
// The return value will be "HOCKEY"

console.log(sport.toUpperCase());

// The bold() method makes the string bold and returns it
// The return value will be <b>stick</b>

console.log(tool.bold())

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var games = ["board", "card", "word"];
var words = ["good", "bad", "neutral"];

// The toString() method takes an array, combines the elements, and returns it as a string, where each element is separated by a comma. 
// The return value will be "board,card,word"

console.log(games.toString());

// The join() method also takes an array and combines it returning a string, but one can specify the separator. 
// The return value will be "good$bad$neutral"

console.log(words.join("$"))
