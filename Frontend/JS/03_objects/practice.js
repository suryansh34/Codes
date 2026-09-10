// object -> collection of properties and methods
const user = {
    name:"Suryansh",
    city: "Raipur",
    phone: 797238495
}
// accessing the element of object.
console.log(user.name);
console.log(user["phone"]);

// symbol as object key 
const mySym = Symbol("key1");

const JsUser = {
  [mySym]: "myKey",
  name: "Suryansh"
};

JsUser.name = "Harry"
console.log(JsUser)

// to freeze an object we use
Object.freeze(JsUser)
JsUser.name = "Cha[per"
console.log(JsUser);

// creating methods inside object
JsUser.message = function(){
    console.log("Hello Beta");
    
}
console.log("******************");

console.log(JsUser);

// singleton object 

const singletonObject = new Object();
console.log(typeof singletonObject);

// nested objects
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstname: "ram",
    lastname: "surname"
  }
};

console.log(regularUser.fullname.firstname);

// optional chaining

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstname: "ram",
    lastname: "surname"
  }
};

console.log(regularUser.fullname?.firstname);

// merging objects

const obj1 = {name:"ram",age:45}
const obj2 = {naam:"shyam",umra:54}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


// spread operator
const ob4 = {...obj1, ...obj2};
console.log(ob4);

/* 
merging object conflicts if keys are same in other objects also.
*/

// arrays of object

const userbase = [{
    name:"ram", age:45
},{
    name:"ramuuu", age:23
}]

console.log(userbase[0].name); //ram

console.log(Object.keys(userbase));
console.log(Object.values(userbase));
console.log(Object.entries(userbase));

console.log(userbase[0].hasOwnProperty("name"));


// destructuring the object
const userbase = [{
    name:"ram", age:45
},{
    name:"ramuuu", age:23
}]

const [{name: nam,age: umar}] = userbase;

console.log(nam,umar);







