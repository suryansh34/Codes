// // Shallow Copy 

// const identity = {
//     name: "Suryansh",
//     address: {
//         state:"Chahttisgarh",
//         city:"Raipur"
//     }
// }

// const fake_identity = {...identity}

// fake_identity.name = "Yishuraj";
// fake_identity.address.city = "Delhi";

// console.log(identity.name)
// console.log(identity.address.city) // this will be changed



// // Deep Copy

// const person = {
//   name: "Alice",
//   address: {
//     city: "New York"
//   }
// };

// const copy = structuredClone(person);

// copy.name = "Jason";
// copy.address.city = "Los Angeles";

// console.log(person.name); // New York ✅ Unchanged
// console.log(person.address.city); // New York ✅ Unchanged


// // iterable to array
// const Naam = "Suryansh"

// const result = Array.from(Naam);

// console.log(result);


// nodelist to array

const paragraphs = document.querySelectorAll("p")
const arr = Array.from(paragraphs)

arr.forEach(p=>{
  console.log(p.textContent);
  
})

// filtering and mapping in js.


const students = [
  {
    name: "Suryansh", marks: 74,

  },
   { name: "Yishuraj", marks: 94,

   },
    {
      name: "Aman", marks: 24,
    },
    {
      name: "Lokesh", marks: 56,
    },
  
]

const passedStudents = students.filter(students => students.marks >= 40).map(students => students.name)

console.log(passedStudents)

