// functions

function myname() {
  return "Suryansh";
}
myname();
console.log(myname());

// function with return 
function myname(first_name, last_name) {
  return (first_name + last_name);
}
console.log(myname("Suryansh", " Sahu"));

// function without return.
function parents(mother,father){
    console.log(mother + father);
}
let parents_name = parents("Jaishree"," Kishore");
console.log(parents_name);

// default parameters

function loginUserMessage(username = "Suryansh") {
  if (!username) {
    console.log("Please login with username.");
  } else {
    return `${username} just logged in`;
  }
}
console.log(loginUserMessage("Aashu"))

// this inside an object:
const user = {
  username: "surya",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}
user.welcomeMessage();

// standard arrow functions:
function username2 (){
    let username = "suryansh"
    return username;
}

const car ={
    model: "x300",
    price: function car_price(){
        console.log(this.model);
        
    }
}
car.price(); //x300


// implicit return arrow function 

const usrname = (first_name,middle_name, last_name) => (first_name+middle_name+last_name);
console.log(usrname("Suryansh","Kumar","Sahu"))


// nested scope / closure

function main() {
    let id = "2491y4214";

    function local(){
        console.log(id);
    }
    local();
}    
main()


// IIFE ---> used in older js versions.

(function(){
    console.log("Username is Suryansh")
}) ()

// static intialization block which is alternative to modern IIFE techniques

class user{
    static{
        console.log("Hello Charlie");
        
    }
}

// Jaavscript Constructor:
class User{
    constructor(){
        console.log("I ran a code with my first attempt");
        
    }
}
const user = new User();

// arrow version of IIFE

(()=>{
    let myNameis = "Suryansh";
    console.log(myNameis);
})()

// hoisting

console.log(one);
var one = 1;

var two;
console.log(two);
two = 2;

console.log(addTwo);

var addTwo = function () {
  return 2 + 2;
};







