// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

// function transformArray(arr) {

//     let outputArray = [];

//     for (let str of arr) {
//         outputArray.push(str.length);
//     }

//     return outputArray;
// }



const str = "Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length";

const strArray = str.split(" ");

const outputArray = strArray.map(str => str.length);

// console.log(transformArray(strArray));
console.log(outputArray);

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function returnLongerThanFive(arr) {

    let outputArray = [];

    for (let str of arr) {
        if (str.length > 5) {
            outputArray.push(str);
        }
    }

    return outputArray;
}

console.log(returnLongerThanFive(strArray));

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)