
// Todo 5.4.1 Create a function called add that takes in two numbers and returns their sum
const add = (num1, num2) => {
    return num1 + num2
}
/**function add(num1,num2){
    return num1 + num2;
}
console.log(add(1,3)) */
// Todo 5.4.2 Create a constant that contains the approximate value of PI 

const PI = (Math.PI)

// Todo 5.4.3 Export the function and constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

module.exports = { add, PI }