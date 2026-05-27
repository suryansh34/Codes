//object as singleton and with constructor

const tinderUser =  new Object() // this is singleton
// this is also the same 
// const tinderUser = {} // this is not singleton

console.log(tinderUser); // we will get empty object.

// Facebook

const facebookUser = {}

facebookUser.id = "123abc"
facebookUser.name = "Suryansh"
facebookUser.isLoggedin = true 

console.log(facebookUser);


// Another Function --> nested objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "ram",
        lastname: "shyam"
    
    }
}
// Optional Chaining --> if fullname doesnot exist we (regularUser.fullname?.firstname)
console.log(regularUser.fullname)

// merging objects
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2} // not right approach
//better version given below
// const obj3 =Object.assign({},obj1,obj2) // not necsarry to use {} ,  this act as target and all the objects are acts as source.
// another methods --> spreading --> .....

// const obj3 = {...obj1, ...obj2}
// console.log(obj3) 



const users = [

    
    {
        id: 1,
        email: "some@gmail.com"
        
    },
    {
        id: 2,
        email: "some@gmail.com"
        
    },
    {
        id: 3,
        email: "some@gmail.com"
        
    },
    {
        id: 4,
        email: "some@gmail.com"
        
    }

]

users[1].email
console.log("this is after facebookk USer")
console.log(facebookUser);
console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser));


// to verify if the property exist we use hasOwnProperty
console.log(facebookUser.hasOwnProperty('name'))