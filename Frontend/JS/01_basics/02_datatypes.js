"user strict"; // use all the JS code as newer version.

// alert(3+3); // we are running in nodejs not browser so it will not work.


/* These are the some datatypes:-

1. number => 2 to power 52
2. string
3. BigInt use for big number ( used in stock market )
4. boolean- true or false
5. null=> standalone value
6. undefined 
7. symbol - used to define uniqueness



*/ 

const accoountID = 35205

let temp = null; // null 

// console.log(temp);


let temp2; // undefined

console.table([temp, temp2]);

console.log("type of accountID is: ",typeof null); // type of null is object , 
console.log("type of accountID is: ",typeof undefined); // undefined is undefined bcoz it is a type in JS.  


console.log("type of accountID is: ",typeof temp); // object , 
console.log("type of accountID is: ",typeof temp2); // undefined 


// this is function i made 
function Items(dry,wet){
    this.dry = dry;
    this.wet = wet;

}

// an object i will make 

// create a object and takes value --> eassier than below steps 

const me = new Items("Kaju","Chasni");

// console.log(me)

// this is simpler to create a object and insert values 

const me = {}  //this is empty object 
me.dry = "Kaju"
me.wet = "Katli"

console.table(me)



// !!!!!!!!!!! This is not the correct method !!!!!!!!!!!!!
const e = emptyObj = {}
e.dry = "kaju"
e.wet = "katli"

console.table(e)

