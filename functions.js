// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "What's crackin', Homeslice?";
}

console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `What's poppin', ${name}?`;
}

console.log(customGreeting("Djonathan"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    return `My, my, my... if it isn't ${first} ${middle} ${last}.`;
}

console.log(greetPerson("Gary", "Voldemort", "McGriddle"));

// 4: Write a function named square that takes in one number, and returns the square of that number.

function square(x) {
    return Math.pow(x, 2);
}

console.log(square(4));

// BONUS: Print a sentence that interpolates the return value of your square function.

x = 10;
console.log(`The square of ${x} is ${square(x)}`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:

// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock(x, stock) {
    if (x < 4 && x > 0) {
        console.log(`${stock} - running LOW`);
    } else if (x >= 4) {
        console.log(`${stock} - is stocked`);
    } else
        console.log(`${stock} - OUT of stock!`);
        
}

checkStock(4, "Coffee");
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");