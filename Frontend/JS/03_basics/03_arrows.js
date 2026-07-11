// this and arrow function

const user = {
    username: "surya",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website `);

    console.log(this)    
        
    }
}

// user.welcomeMessage()
// user.username = "Don"
// user.welcomeMessage()

console.log(this)


function chai() {
    let username = "suryansh"
    console.log(this.username);

}

chai();

// this will give you undeefined which means it is refer to an object not a function 


// const chai = function() {
//     let username = "suryansh"
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "suryansh"
    console.log(this.username);
}
chai();


// basic arrow function

const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3;

}
console.log(addThree(3,4,5))

//implicite arrow function 

// const addThree = (num1, num2, num3) =>  num1 + num2 + num3;

// console.log(addThree(3,4,5))

const addThree = (num1, num2, num3) =>  (num1 + num2 + num3);
console.log(addThree(3,4,5))


// implementation of arrow function 

const myArray = [2,3,5,7,8]

myArray.forEach(function() {})