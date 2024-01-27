 // 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -

// YOUR CODE HERE

function countElements(arr) {
    const obj = {};
    for (let key of arr) {
    //     if(!obj[ele]) {
    //         obj[ele] = 1;
    //     } else {
    //         obj[ele] ++;
    //     }
    // console.log("key: ", key);
    // console.log("object: ", obj);
    // console.log("count: ", obj[key]);

    obj[key] = obj[key] + 1 || 1


    }
    return obj
}


const dinosaurNames = [
    "Tyrannosaurus",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Tyrannosaurus",
    "Velociraptor",
    "Stegosaurus",
    "Allosaurus",
    "Ankylosaurus",
    "Spinosaurus",
    "Pteranodon",
    "Parasaurolophus",
    "Dilophosaurus",
    "Iguanodon",
    "Archaeopteryx",
    "Carnotaurus",
    "Compsognathus",
    "Pachycephalosaurus",
    "Dimetrodon",
    "Tyrannosaurus",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Tyrannosaurus",
    "Velociraptor",

  ];

  console.log(countElements(dinosaurNames));
// Example:
// ["apple", "orange", "apple", "banana", "apple", "orange"]
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// YOUR CODE HERE

function returnValue(obj, key) {

  return obj[key] ? `The value to ${key} is ${obj[key]}` : `Error: ${key} does not exist!`

  // return obj[key] || `Error: ${key} does not exist!` short circuiting. Return the left side if it's true/truth, otherwise return the right

  // check if the property exists in the object by passing it the key
    // if the property exists we return the value
    // if it does not exist we return an error message

}

console.log(returnValue(countElements(dinosaurNames), "Velociraptor"))
console.log(returnValue(countElements(dinosaurNames), "Funnysaurus"))
console.log(returnValue(countElements(dinosaurNames), ))

// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};


// YOUR CODE HERE

person.address.street = "789 Tangent Alley"

console.log(person)


// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

const companyOrganizationalStructure = {
    companyName: "TechCorp",
    CEO: {
      name: "John CEO",
      office: {
        location: "Floor 10, Building A",
        employees: {
          executiveAssistant: {
            name: "Alice Executive",
            desk: "A101",
          },
        },
      },
    },
    departments: {
      development: {
        head: {
          name: "Bob Head",
          office: {
            location: "Floor 8, Building B",
            employees: {
              softwareEngineer1: {
                name: "Charlie Engineer",
                desk: "B801",
              },
              softwareEngineer2: {
                name: "David Coder",
                desk: "B802",
              },
            },
          },
        },
      },
      marketing: {
        head: {
          name: "Eva Marketer",
          office: {
            location: "Floor 6, Building C",
            employees: {
              marketingSpecialist1: {
                name: "Frank Specialist",
                desk: "C601",
              },
              marketingSpecialist2: {
                name: "Grace Promoter",
                desk: "C602",
              },
            },
          },
        },
      },
    },
  };
  
  // YOUR CODE HERE
  
  console.log("a ---->",companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk)

  console.log("b ---->",companyOrganizationalStructure.departments.marketing.head.office.location)

  console.log("c ---->",companyOrganizationalStructure.CEO.office.employees.executiveAssistant.name)

  companyOrganizationalStructure.departments.development.head.office.employees["softwareEngineer3"] = { name: "Ray Developer", desk: "B802"} 

  companyOrganizationalStructure.departments.marketing.head.name = "Johann Marketer"

  // ------------------------------------------------------------------------
  
  // 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!
  
  const key = "name";
  const value = "Roberto Robertson"

  const newObj = {[key]: value}
  
  console.log(newObj)
  
  // 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS
  
  // YOUR CODE HERE

  function logObject(obj){
    for (let key in obj) {
      console.log(key)
    }
  }

  logObject(companyOrganizationalStructure)
  
  // ------------------------------------------------------------------------
  
  // 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop
  
  // YOUR CODE HERE
  
  function compareObj(obj1, obj2) {
    for (let key1 in obj1) {
      for (let key2 in obj2) {
        if(obj1[key1] !== obj2[key2]){
          return `${obj1} does not have same values as ${obj2}.`
        } else {
          return `${obj1} have same values as ${obj2}.`
        }
      }
    }
  }

  console.log(compareObj(countElements(dinosaurNames), companyOrganizationalStructure))
  console.log(compareObj(companyOrganizationalStructure, companyOrganizationalStructure))
  // ------------------------------------------------------------------------