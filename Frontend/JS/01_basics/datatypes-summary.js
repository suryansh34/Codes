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



//  *********************************************************

// Primitive(Stack) and Non-Primitive(Heap)

// Example of Primitive Datatypes **** gives copy of the element 

let myyoutubeChannel = "harrybeta21dotcom"
let youtubeChannel = myyoutubeChannel
youtubeChannel = "java@gmail.com"
// myyoutubeChannel = "java@gmail.com"

console.log(youtubeChannel)

console.log(myyoutubeChannel)


// Non-Primitive Datatype **** stores in heap memory which refer to the same element
let accountDetails1 = {
    username: "helloworld2",
    age: 24,
    rollno: 3546
}
    
let accountDetails2 = accountDetails1

accountDetails1.age = 46

console.log(accountDetails1.age)
console.log(accountDetails2.age)





