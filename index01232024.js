// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

function capitalizeWord(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr +=str[i]
    }
    return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase()
}

function capitalizeEveryWord(str) {
    let newString = str.split(" ")
    return newString.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    
//return str
//      .split(" ")
//      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
//      .join(" ")
}


// function capitalizeEveryWords (str) {
//     const words = str.split(" ");
    
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }
//     return words.join(" ")
// }

console.log(capitalizeWord("carpenter"))
console.log(capitalizeEveryWord("tim the tool man taylor"))
console.log(capitalizeEveryWord("capitalize every word in this sentence"))

// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 


const john = {
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  const rebecca = {
    firstName: "Rebecca",
    lastName: "Cohen",
    occupation: "Teacher"
  }

// function formatGreeting ({ firstName, lastName, occupation }) {

//     return `Hello ${firstName} ${lastName}, have a great day at your job as a ${occupation}`

// }

function formatGreeting(obj) {

    return `Hello ${obj.firstName} ${obj.lastName}, have a great day at your job as a ${obj.occupation}`

}
  
  console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")
// console.log(formatGreeting(john))
  console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")
// console.log(formatGreeting(rebecca))
  
  // 3.----------------------------------
  // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  
  /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  */

  const arrayOfObjects = [
    { id: "Tfjso_4M", firstName: "John", lastName: "Klaus", occupation: "Carpenter" },
    { id: "Ugksl_8N", firstName: "Emma", lastName: "Smith", occupation: "Architect" },
    { id: "Vhrpl_2O", firstName: "David", lastName: "Jones", occupation: "Plumber" },
    { id: "Wiztn_6P", firstName: "Sophie", lastName: "Miller", occupation: "Electrician" },
    { id: "Xmjro_9Q", firstName: "Oliver", lastName: "Brown", occupation: "Painter" },
    { id: "Ynklu_1R", firstName: "Mia", lastName: "Davis", occupation: "Interior Designer" },
    { id: "Zolvp_3S", firstName: "Ethan", lastName: "Wilson", occupation: "Landscaper" },
    { id: "Apmwi_5T", firstName: "Ava", lastName: "Johnson", occupation: "Mechanic" },
    { id: "Bjqrx_7U", firstName: "Daniel", lastName: "Moore", occupation: "Architectural Engineer" },
    { id: "Csgdz_0V", firstName: "Lily", lastName: "Turner", occupation: "Woodworker" }
];



function returnGreeting(arr, id) {
    for (let obj of arr) {
        if(obj.id === id)
        return formatGreeting(obj)
    }
}

console.log(returnGreeting(arrayOfObjects, "Bjqrx_7U"))
console.log(returnGreeting(arrayOfObjects, "Csgdz_0V"))