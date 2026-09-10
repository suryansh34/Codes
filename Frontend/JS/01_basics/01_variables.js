const accountID = 13554523
let accountEmail = "surya@google.com"
var accountPassword = "1234" /* Prefer not to use var because it can create issue of block scope  */
let accountState;

accountCity = "Raipur"
console.log(accountCity)


// accountID = 3489057   /* not allowed*/

/* This is general way of writing */
console.log(accountID);
console.log(accountPassword);
console.log(accountEmail);
console.log(accountCity);

// This make a console table with contain index and value 
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

const arr = [2,3,4,5,6,7,8,9]

// this will print 2 at 0 index and 3 at 1 index and so on....
console.table(arr)