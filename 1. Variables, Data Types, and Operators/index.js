/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log("\n--------------------------------TO DO 1.1--------------------------------\n")
var myVar= 22
console.log("Initial 'var' value: ",myVar);

myVar= 15           //Re-assigning new value
console.log("Re-assigned 'var' value: ",myVar);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

console.log("\n--------------------------------TO DO 1.2--------------------------------\n")

let Num1 = 22
console.log("Initial 'let' value: ", Num1)

Num1 = 23
console.log("Re-assigned 'let' value: ", Num1)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

console.log("\n--------------------------------TO DO 1.3--------------------------------\n")

const num_1 = 22
console.log("Constant value: ",num_1)

//num_1 = 23;
//num_1 = 23;console.log(num_1)         //Re-assigning the value with "const" keyword results an error.

// Checkpoint 1.1 What is the difference between var, let, and const?
/**Answer:  Utilizing "var" keyword, I can re-declare and update my variable.
            Meanwhile, utilizing "let",I can update but I cannot re-declare. 
            On the other hand, using "const", i cannot reupdate the initial variable.
*/

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

console.log("\n--------------------------------TO DO 1.4--------------------------------\n")
const num1 = 22
const num2 = 3

const sum = num1 + num2
const diff = num1 - num2
const prod = num1 * num2
const div = num1 / num2
const mod = num1 % num2

console.log("Sum: ",sum +"\nDIfference: ",diff +"\nProduct: ",prod +"\nQuotient: ",div+"\nRemainder: ",mod)

// Checkpoint 1.2 What operators did you use?
// Answer: I used addition(+), subtraction(-), multiplication(*), division(/), and modulo division(%)

// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

console.log("\n--------------------------------TO DO 1.5--------------------------------\n")
let str1 = "Hi, "
let str2 = "I'm Rane."
console.log(str1 += str2)

let str3 = "I'm a Computer Science Student "
let str4 = "at Mapua MCL."
let course = str3 + str4
console.log(course)

// Checkpoint 1.3 What operators did you use?
// Answer: I used concatenate operator(+) and concatenate assignment operator(+=)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

console.log("\n--------------------------------TO DO 1.6--------------------------------\n")
let var1 = 5
let var2 = 10

let useAND = (var1 < var2) && (var1 !== var2)
let useOR = (var1 < var2) || (var1 === var2)
let useNOT = !(var1 < var2)

console.log("AND operator: "+useAND)
console.log("OR operator: "+useOR)
console.log("NOT operator: "+useNOT)

// Checkpoint 1.4 What operators did you use?
// Answer: I used AND (&&), OR (||), and NOT (!) operator.

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
/** Answer: [] == false which [] is coerced to true (true==false), 
 *          but because of JavaScript's type coercion rules and the comparison process,
 *          [] == false evaluates to true. That is why, it is important to use strictly 
 *          equality operator(===) */

// Your code here
console.log("\n\n--------------------------------TO DO 1.7--------------------------------\n\n")
let a = 15
let b = 5

let isGreater = (a > b)
let isLess = (a < b)
let greaterOrEq = (a >= b)
let lessOrEq = (a <= b)
let isEqual = (a ===b)
let notEqual = (a !==b)

console.log(a + " is greater than " + b + " : " + isGreater)
console.log(a + " is less than " + b + " : " + isLess)
console.log(a + " is greater than or equal to " + b + " : " + isGreater)
console.log(a + " is less than or equal to " + b + " : " + isLess)
console.log(a + " is equal to " + b + " : " + isEqual)
console.log(a + " is not equal to " + b + " : " + notEqual)