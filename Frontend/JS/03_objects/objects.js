// Singleton
// object literals

const mySym = Symbol("key1")
// how to use symbol as a key of an object

console.log(mySym)

const JsUser = {
    name: "Suryansh",
    "full_name": "Suryansh Sahu",
    [mySym]: "myKey", // this is wrong. to use like symbol use square brackets.
    age: 21,
    location: "raipur",
    email: "surya@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Thursday", "Saturday"]
} 

// not right way
console.log(JsUser.name)
// There is no option to get the info of string declared like "full_name" with using "." . 

console.log(JsUser["email", "full_name"])
console.log(JsUser[mySym]) // this is wrong --> // this is string not symbol , to use we square brackets.

// Point of interview we use Symbol like  --> IMP Note

// to changed the value we use ---
                            


JsUser.email == "surya@chatgpt.com"

//inorder to make it permanent we use object freeze

// Object.freeze(JsUser)
JsUser.email = "surya@facebook.com"
console.log(JsUser.email)



console.log(JsUser)










// Function in JS

JsUser.greeting = function(){
    console.log("Hello Js User")

}


JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
    
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())