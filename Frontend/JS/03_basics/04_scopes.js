// Concept we will learn --> global and local scope

let a = 10
const b = 20
var c = 30



console.log(a);
console.log(b);
console.log(c);

// we need to learn scope first 

//This is basics
Statement = true;

if(Statement==true){
    console.log("The Statement is true");
}
else{
    console.log("The Statement is false");

}

// this will give you error -- > thats why var is not use for optimized use.
let c = 300


if(true){
    let a = 10
    const b = 20
    let c = 30
    console.log("This is local scope")
    console.log("INNER: ",c)
}
console.log("This is global scope")
console.log(c);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}