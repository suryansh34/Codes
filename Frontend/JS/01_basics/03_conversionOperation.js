let score = 33


// converting datatype "int ---> string"
let ScoreInString = String(score) 
console.log(typeof(ScoreInString));

// let score = 33abc

let score2  = "33abc"
let score2InNumber  = Number(score2);
console.log(typeof(score2InNumber));
console.log(score2InNumber); // This will give NaN (Not a Number) --> which means it returns the datatype.

let police = "surya"
let policeIsLoggedIN = Boolean(police);
console.log(policeIsLoggedIN);
// true => 1 ; false => 0
// ""=> false ; "surya" => true

// ******************* Operation *******************

let value = 3
let negValue = -value
console.log(negValue)


console.log(2%3)


console.log("2"+ 2 + 2); // Not readable and not optimized

// link to study about increment operator 

let gameCounter = 100;
++gameCounter
console.log(gameCounter); // Ouput => 101