// function greeting(){
//     let message = 'Hello John'
// }

// greeting('')
// console.log(message)


//^^gets a reference error in the console "message is not defined" because message variable is out of scope



// let message = 'Hello'

// if(message ==='Hello'){
//     let message ="Inside of if block"
//     console.log(message)
// }
// console.log(message)

//Block scope example above. Block = anything contained in the curly braces of  an if statement, a while or a for loop, or any set of curly braces other than a function


// variables declared with var keyword or within  function declarations DO NOT have block scope

// Immediately invokes Function Expression (IIFE)

// Function Expression: Define a function and assign it to a variable

// Immediately invoked: invoking the function right away where it's defined


// Function
// function greeting(){
//     console.log('Hello')
// }
// greeting();


// IIFE

// (function() {
//     console.log('Hello');
// })();

// Notice the IIFE version doesn't have a name and it is completely inside parenthesis. It also is invoked at the end. This function is immediately invoked



// Closures
// let greeting = (function(){
//     let message = 'Hello';
//     let getMessage = function(){
//         return message;
//     };
// })();
// console.log(greeting.message)
//undefined because message variable is out of scope. You couls use closures to prevent the necessary variables from going out of scope

// ex:
// let greeting =(function(){
//     let message = 'Hello'
//     let getMessage = function(){
//         return message;
//     };
//     return {
//         getMessage: getMessage,
//     };
// })();
// console.log(greeting.getMessage());

// Arrow Functions

// function sum(num1, num2){
//     return num1 + num2
// }

// let output =sum(10, 5)
// console.log(output)


// Written as an arrow function

let sum = (num1, num2) => num1 + num2
let output =sum(10, 7)
console.log(output)