/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log("--------------------------------TO DO 3.1--------------------------------")
console.log("First number from array: ",numbers[0])
console.log("Fifth number from array: ",numbers[5-1])
console.log("Last number from array: "+ numbers[numbers.length-1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here


console.log("--------------------------------TO DO 3.2--------------------------------")
let min = Math.min(...numbers);
let max = Math.max(...numbers);
let sum = numbers.reduce((acc, num) => acc + num, 0);
let ave = sum / numbers.length;

console.log("Minimum Value: " +min+ "\nMaximum Value: " +max+min+ "\nAverage Value: " +ave)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
/**Answer:  JavaScript arrays can only store elements of the same data type, 
            whereas Python lists can store elements of different data types.
*/ 

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114Linfo = {
    courseCode : "IT114L",
    name : "Web Systems and Technologies Laboratory",
    unitsNum : 1,
    numOfStud : 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

console.log("--------------------------------TO DO 3.4--------------------------------")
IT114Linfo.profName = "Job Lipat"
console.log("Professor name: "+ IT114Linfo.profName)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here


let myCourses = [
    {
        courseCode : "IT114L",
        name : "Web Sytems and Technologies Laboratory",
        unitsNum : 1,
        numOfStud : 40,
        profName : "Job Lipat"
    },
    {
        courseCode : "IT114",
        name : "Web Systems and Technologies",
        unitsNum : 2,
        numOfStud : 41,
        profName : "Adomar Ilao"
    },
    {
        courseCode : "CS107L",
        name : "Information Management Laboratory",
        unitsNum : 1,
        numOfStud : 19,
        profName : "Dahlia de Mesa"
    },
    {
        courseCode : "CS107",
        name : "Information Management",
        unitsNum : 2,
        numOfStud : 40,
        profName : "Dahlia de Mesa"
    },
    {
        courseCode : "CS120",
        name : "Structure of Programming Languages",
        unitsNum : 3,
        numOfStud : 25,
        profName : "Aurelia Sharlene Delos Santos"
    },
    {
        courseCode : "IT113",
        name : "Technopreneurship",
        unitsNum : 3,
        numOfStud : 26,
        profName : "Jonalyn Ebron"
    },
    {
        courseCode : "HUM039",
        name : "Ethics",
        unitsNum : 3,
        numOfStud : 28,
        profName : "Rogelio Valenzuela"
    },
    {
        courseCode : "VE022",
        name : "Values Education 2",
        unitsNum : 1,
        numOfStud : 54,
        profName : "Maricar Apolinario"
    }
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here


console.log("--------------------------------TO DO 3.5--------------------------------")
let totalUnits = 0
for (let i = 0; i < myCourses.length; i++){
    totalUnits += myCourses[i].unitsNum
}
console.log("Total number of units: "+ totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
/**Answer: The equivalent of “object” in JavaScript is the  “dictionary” in Python.
           In JavaScript, it is possible to create and delete keys in an object dynamically.
           On the other hand, in Python, dictionary keys are not as flexible, and it is not 
           possible to dynamically add or remove keys from a dictionary.
*/

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

console.log("--------------------------------TO DO 3.6--------------------------------")

let additionalNum = 8
let newArr = [...numbers, additionalNum]
console.log("New array: ",newArr)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

console.log("--------------------------------TO DO 3.7--------------------------------")

let cCode_units ={...IT114Linfo}
console.log("Course code: ",cCode_units.courseCode +"\nUnits: ",cCode_units.unitsNum)
