
const user= {
    username: "suryansh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Detail from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // --> implicitly defined nahi likhenge toh bhi chalega

}


// const userOne = User("Suryansh", 15, true)
// const userTwo = User("Yishuraj", 9, false)
// console.log(userOne);


// that's why use constructor function --> use new to give new instances warna value overwrite ho jaayegi.


// steps:
/*
 1. create an empty object
 2. constructor function call due to new keyword
 3. this keyword injects arguments
 4. gives output inside function

 */

const userOne = new User("Suryansh", 15, true)
const userTwo = new User("Yishuraj", 9, false)
// console.log(userOne);
console.log(userOne.constructor); // reference of itself

// instanceof() --> study;

// console.log(userTwo);