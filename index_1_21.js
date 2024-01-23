// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

function findTarget(arr, target) {
    // for (let num of arr) {
    //     if (num === target) {
    //         return num;
    //     }
    // }
    // return undefined;

    return arr.find((num) => num === target);
}

console.log(findTarget([1, 2, 3, 4, 5], 5))
console.log(findTarget([1, 2, 3, 4, 5],15))


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

function findBiggerThanFourteen(arr) {
    // for (let num of arr) {
    //     if (num > 14) {
    //         return num
    //     }
    // }
    // return undefined;

    return arr.find(num => num > 14);
}

console.log(findBiggerThanFourteen([11, 12, 13, 14, 15]))
console.log(findBiggerThanFourteen([1, 2, 3, 4, 5]))

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

function findStringLengthGreaterThanFour(arr) {
    // for (let str of arr) {
    //     if (str.length > 4) {
    //         return str
    //     }
    // }
    // return undefined;

    return arr.find(str => str.length > 4)
}

console.log(findStringLengthGreaterThanFour(["one", "two", "three", "four", "five"]))
console.log(findStringLengthGreaterThanFour(["six", "seven", "eight", "nine", "ten" ]))


// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/

const arrayOfObjects = [
    { id: "A84D_c", name: "Roy", occupation: "Driver", eyeColor: "brown" },
    { id: "B92F_d", name: "Alice", occupation: "Teacher", eyeColor: "blue" },
    { id: "C73E_a", name: "Bob", occupation: "Engineer", eyeColor: "green" },
    { id: "D61A_b", name: "Eva", occupation: "Doctor", eyeColor: "hazel" },
    { id: "E58B_f", name: "Charlie", occupation: "Artist", eyeColor: "gray" },
    { id: "F49C_e", name: "Grace", occupation: "Chef", eyeColor: "amber" },
    { id: "G37D_g", name: "David", occupation: "Scientist", eyeColor: "blue" },
    { id: "H25E_h", name: "Sophie", occupation: "Writer", eyeColor: "green" },
    { id: "I14F_i", name: "Oliver", occupation: "Musician", eyeColor: "brown" },
    { id: "J03G_j", name: "Emma", occupation: "Athlete", eyeColor: "hazel" }
];




function returnFirstObject (arr, id) {

    return arr.find(obj => obj.id === id)

}

console.log(returnFirstObject([
    {
    id: "A84D_c",
    name: "Roy",
    occupation: "Driver",
    eyeColor: "brown"
   },
   {
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
    id: "Z55W_d",
    name: "Rose",
    occupation: "Dancer",
    eyeColor: "blue"
   },
   {
    id: "K10R_e",
    name: "Rodney",
    occupation: "Teacher",
    eyeColor: "brown"
   }], "Z55W_d"))

   console.log(returnFirstObject([
    {
    id: "A84D_c",
    name: "Roy",
    occupation: "Driver",
    eyeColor: "brown"
   },
   {
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
    id: "Z55W_d",
    name: "Rose",
    occupation: "Dancer",
    eyeColor: "blue"
   },
   {
    id: "K10R_e",
    name: "Rodney",
    occupation: "Teacher",
    eyeColor: "brown"
   }], "U51O_p"))


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

function returnName (arr, id) {

    for (let obj of arr) {
        if(obj.id === id){
            return { "name" : obj.name }
        }
    }

}

console.log(returnName([
    {
    id: "A84D_c",
    name: "Roy",
    occupation: "Driver",
    eyeColor: "brown"
   },
   {
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
    id: "Z55W_d",
    name: "Rose",
    occupation: "Dancer",
    eyeColor: "blue"
   },
   {
    id: "K10R_e",
    name: "Rodney",
    occupation: "Teacher",
    eyeColor: "brown"
   }], "Y42C_a"))

   console.log(returnName([
    {
    id: "A84D_c",
    name: "Roy",
    occupation: "Driver",
    eyeColor: "brown"
   },
   {
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
    id: "Z55W_d",
    name: "Rose",
    occupation: "Dancer",
    eyeColor: "blue"
   },
   {
    id: "K10R_e",
    name: "Rodney",
    occupation: "Teacher",
    eyeColor: "brown"
   }], "U51O_p"))