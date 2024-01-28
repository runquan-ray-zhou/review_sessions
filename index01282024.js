// Acc Pattern

// It accumulates in a for loop.
// It accumulates everything in an array to a single value.
// A function returns a single output, never return outside a function.
// All native array methods uses the accumulator pattern
// Steps to use the acc pattern
// 1. initialize a variable to accumulate into, with a default value.  can be string, empty array, empty object, zero.
    // 3.Create a for loop and in the for loop - Accumulate
// 2. at the end of the function, return the variable

// Find the max value in an array - 

// function findMax(arr) {
//     return Math.max(...arr) 
// }

// console.log(findMax([1, 3, 2]));

// Iterative Native Array Methods

// 1. .filter - filter out what you specify to it in the return value of the callback function and returns a new array.
// 2. .every - returns a boolean based on the specified condition if all the elements return true.
// 3. .some - returns a boolean based on the specified condition if at least one element returns true.
// 4. .find - returns the first element that returns true from a specified condition.
// 5. .map - returns a new array where each element is transformed base on te return value of the callback.
// 6. .reduce - can do multiple functions. can emulate all the other native array methods.

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

function transformArray(arr) {

//     let outputArray = []; // initialize accumulator

//     for (let str of arr) { // loop
//         outputArray.push(str.length); // transform the accumulator
//     }

//     return outputArray; // return the accumulator

    return arr.map(str => str.length);
}



const str = "Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length";

const strArray = str.split(" ");

// const outputArray = strArray.map(str => str.length);

console.log(transformArray(strArray));
// console.log(outputArray);

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

// function returnLongerThanFive(arr) {

//     let outputArray = [];

//     for (let str of arr) {
//         if (str.length > 5) {
//             outputArray.push(str);
//         }
//     }

//     return outputArray;
// }

// console.log(returnLongerThanFive(strArray));

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)