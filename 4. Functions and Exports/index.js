/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

console.log("\n--------------------------------TO DO 4.1--------------------------------\n")
function greet(name){
    return ("Hi, I'm " + name)
}
console.log(greet("Rane"))

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
/**Answer:  A function declaration is created using the function keyword followed by the function name 
            and the function body. In contrast, a function expression is made by assigning a function to 
            a variable or a constant. */

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

console.log("\n--------------------------------TO DO 4.2--------------------------------\n")
function calculateArea(length, width){
    return area = length * width;
}
console.log("Area of rectangle: " +calculateArea(25,5))

// Checkpoint 4.2 What is a callback function? Provide an example.
/**Answer:  A callback function is a function that is passed as an argument to another 
            function and is invoked or called inside that function 
*/

console.log("\n--------------------------------TO DO 4.3--------------------------------\n")
// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

const modifyArray = (arr, modifierFunction) => {
    return arr.map(modifierFunction)
}
const numbers = [1, 2, 3, 4, 5]
const increment1 = (num) => num + 1
const modifiedNums = modifyArray(numbers, increment1);
console.log("Modified numbers: " + modifiedNums);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("\n--------------------------------TO DO 4.4--------------------------------\n")
const { add, PI } = require('./mathUtils')
const sum = add(5, 3)
console.log("Sum: " +sum+ "\nPI value: " +PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("\n--------------------------------TO DO 4.5--------------------------------\n")
const isPalindrome = require('./isPalindrome');
const word1 = 'Hannah'
const word2 = 'Savannah'
const result = isPalindrome(word1);
const result2 = isPalindrome('word2');
console.log("The word '" +word1+ "' is  palindrome: " +result+ "\nThe word '" +word2+ "' is palindrome: " +result2)

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
/**Answer:   The `require` function is used to import modules or files in Node.js. 
             The `module.exports` variable is used to define the content that should be exported from a module. 
             If we are working in a Node.js environment that supports ECMAScript modules, we should utilize import 
             and export because they are part of the contemporary JavaScript standard and provide greater static 
             analysis and tree-shaking capabilities. However, if we are working in an older Node.js environment 
             or on a project that still relies on CommonJS modules, we should utilize need and module.exports for compatibility.
*/
