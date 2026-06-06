function loginUserMessage(username = "Suryansh") { // given default username as suryansh.
    if(username == undefined){ // or we can write if(!username){ code.... }
        console.log("Please Loggedin with username.");

        
    }
    else{

        return `${username} just loggedin`
    }
}


// console.log(loginUserMessage("Suryansh"))
console.log(loginUserMessage("Aashu"))