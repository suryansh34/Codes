// Immediately Invoked Function Expressions (IIFE)

// basic use of iife ->  (defintion)(call)
(function chai(){
    // named IFFE -> function which have name 
    console.log("Hemlo Ji");

})();

// using arrow function 
// (() => {
//     console.log(`Hemlo Ji 2.O `);
    
// }) ()

((name) => {
    console.log(`Hemlo Ji 2.O ${name}`);
    
}) ("Suryansh")