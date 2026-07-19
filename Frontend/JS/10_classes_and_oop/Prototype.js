// let myName = "Suryansh";
// let myName = "Suryansh      ";
// let myNickName = "Aashu      ";

// // console.log(myName.length);
// // console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
    
}

Object.prototype.surya = function(){
    console.log(`surya is present in all objects `);
    
}
Array.prototype.heySurya = function(){
    console.log(`hello surya --> array `);
    
}

// heroPower.surya()
// myHeros.surya()
// myHeros.heySurya()
// heroPower.heySurya()


// inheritance
const User ={
    name:"chai",
    email: "chai@google.com"
}
const Teacher ={
    makeVideo: true
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport = {
    makeAssignmnet: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUSername = "chaiaurcode     "

String.prototype.trueLength = function()  {
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
    
}

anotherUSername.trueLength()
"surya".trueLength()
"aashu".trueLength()