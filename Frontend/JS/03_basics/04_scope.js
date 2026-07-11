// what is clousre? we will study in details in  DOM(document object model ) ---> used to manipulate html webpages through javascript 

// nested scope

function one() {
    const username = "suryansh";
    
    function two() {
        const website = "surya.com";
        console.log(username);
    }
    // console.log(website); // website is not defined

    two()



}
one()

// same for if and else 

if(true){
    const username = "suryansh"
    if(username === "suryansh"){
        const website = " suryansh@gmail.com"
        console.log(username+website);
    }
    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++ interesting  ++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5))



// hoisting --> Hoisting in JavaScript means that declarations are conceptually moved to the top of their scope before code execution.

console.log(addTwo(2))

const addTwo  = function(num){
    return num + 2
}
