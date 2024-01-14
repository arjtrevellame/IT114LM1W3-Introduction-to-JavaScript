/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

console.log("--------------------------------TO DO 4.1--------------------------------")
const square = numbers.map(item => item*item)
console.log("Numbers: "+numbers+ "\nSquares of numbers: " +square)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

console.log("--------------------------------TO DO 4.2--------------------------------")
const evens = numbers.filter(item => item % 2 === 0);
console.log("Numbers: "+numbers+ "\nEven numbers: " +evens)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

console.log("--------------------------------TO DO 4.3--------------------------------")
const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0)

console.log("Numbers: "+numbers+ "\nThe sum of all numbers: " +sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

console.log("--------------------------------TO DO 4.4--------------------------------")
const upperCaseArr = words.map(item => item.toUpperCase())
console.log("Words: " +words+ "\nUppercase words: " +upperCaseArr)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

console.log("--------------------------------TO DO 4.5--------------------------------")
const nwords = ['Love', 'Wisdom','Will','Peace','Make','Faith','Fate',]
const with4let = nwords.filter(word => word.length > 4);
console.log(with4let)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

console.log("--------------------------------TO DO 4.6--------------------------------")
const concatenatedString = nwords.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(concatenatedString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
/**Answer:  The map() method takes in a function and applies it to each element of an array to create a new array.
            On the other hand, the filter() method creates a new array by removing elements from the original array 
            that do not meet a provided condition. Finally, the reduce() method applies 
            a provided function to the elements of an array and reduces them to a single value.
 
 */