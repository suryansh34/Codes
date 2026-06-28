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