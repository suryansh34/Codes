    console.log("S");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    

/*
to get in optimize way we use function
*/

function sayMyName() {

    // function definition
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    

}

// sayMyName()

/* ----This will give you undefined */
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
//const result = addTwoNumbers(3,4)
//console.log(result)


// to get ride of this 

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1 + number2
    console.log("Surya"); // this will not be going to be executed because after returning the next line cannot be going to print.
}
const result = addTwoNumbers(3,4)
console.log("Result: ",result);


function loginUserMessage(username) {
    if(username == undefined){ // or we can write if(!username){ code.... }
        console.log("Please Loggedin with username.");

        
    }
    else{

        return `${username} just loggedin`
    }
}


// console.log(loginUserMessage("Suryansh"))
console.log(loginUserMessage()) // this will give you undefined.


/*--- giving default values---- */

function loginUserMessage(username = "Suryansh") { // given default username as suryansh.
    if(username == undefined){ // or we can write if(!username){ code.... }
        console.log("Please Loggedin with username.");

        
    }
    else{

        return `${username} just loggedin`
    }
}


// console.log(loginUserMessage("Suryansh"))
console.log(loginUserMessage("Aashu")) // if value is passed it will the value with default value





