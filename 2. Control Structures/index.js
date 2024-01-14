/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

console.log("\n--------------------------------TO DO 2.1--------------------------------\n")
console.log("\nRandom Number: "+randomNumber)
const randNum = randomNumber
if ( randNum > 50)
console.log(randNum +" is more than fifty")

// TODO 2.2 Display whether the random number is odd or even
// Your code here

console.log("\n--------------------------------TO DO 2.2--------------------------------\n")
if (randomNumber % 2 === 0){
    console.log(randomNumber +" is an even number");
}else{
    console.log(randomNumber + " is an odd number");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

console.log("\n--------------------------------TO DO 2.3--------------------------------\n")
const randNo  = randomNumber
if (randNo % 3 === 0 && randNo % 5 === 0){
    console.log("fizzbuzz");
}else if(randNo % 5 === 0){
    console.log("buzz");
}else if(randNo % 3 === 0){
    console.log("fizz");
}else{
    console.log(randNo)
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

console.log("\n--------------------------------TO DO 2.4--------------------------------\n")
toDisplay =  randomNumber % 2 === 0 ? "Even" : "Odd" 
console.log("toDisplay ", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
/**Answer: Switch statements are commonly used in situations where a single expression will compare 
           against multiple possible values.
*/ 

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

console.log("\n--------------------------------TO DO 2.5--------------------------------\n")
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// TODO 2.6 Use a while loop to display all the values in the list
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// Your code here

console.log("\n--------------------------------TO DO 2.6--------------------------------\n")
let index = 0;

while (index < list.length) {
  console.log(list[index]);
  index++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
/**Answer: A while loop checks the condition before executing the loop body.
           If the condition is false at the beginning, the loop body will never execute.
           On the other hand, in a do-while loop, the loop body will execute at least once, 
           regardless of the initial condition. After executing the loop body, the condition 
           is checked. If the condition is true, the loop continues, but if it's false, it 
           terminates.

 */

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

console.log("\n--------------------------------TO DO 2.7--------------------------------\n")
for(const value of list){
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

console.log("\n--------------------------------TO DO 2.8--------------------------------\n")
for(const val in list){
    console.log(list[val]);
}
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

console.log("\n--------------------------------TO DO 2.9--------------------------------\n")
list.forEach((element) => {
    console.log(element);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
/** Answer: The for-of loop is recommended for iterating over the values of an iterable object like
            an array or a string. The for-in loop is used to iterate over the enumerable properties
            of an object and is useful for looping through object keys or array indices. The .forEach
            method is commonly used when we need to iterate over each element of an array and perform 
            a specific action on each element.
*/ 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

console.log("\n--------------------------------TO DO 2.10--------------------------------\n")

try{
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }

}catch (error) {
    console.log("" +error)
}finally{
    console.log("cleaning up resources")
}

