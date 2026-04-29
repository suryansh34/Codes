// JavaScript is Dynamically Typed Language. 

// Primitive Datatype
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const value = 100 // used by JavaScript

/* TypeScript uses :

const vale:number = 100
*/


//This is Datatype BigInt

const bigNumber = 42047027925705n
console.log(typeof bigNumber)


// Symbol

const mySymbol = Symbol('1,2,3')
console.log(typeof mySymbol)

const yourSymbol = Symbol('1,2,3')
console.log(typeof yourSymbol)

console.log(mySymbol == yourSymbol)




// Reference ( Non- Primitive Datatypes)
// Object, Function, Array

// Array
const bikes = ["KTM", "Duke", "350"]
console.log(typeof bikes)


// Object
let myObj = {
    name: "Ram",
    age: 34,
    rollno: 390,
    subject: "maths"
}

console.table([myObj])



// Function
const myfunction = function() {
    console.log("this_is_function")
}
console.log(typeof myfunction)




