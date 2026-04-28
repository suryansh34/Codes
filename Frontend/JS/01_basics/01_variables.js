const accountID = 13554523
let accountEmail = "surya@google.com"
var accountPassword = "1234" /* Prefer not to use var because it can create issue of block scope  */
accountCity = "Raipur"
let accountState;

// accountID = 3489057   /* not allowed*/

/* This is general way of writing */
console.log(accountID);
console.log(accountPassword);
console.log(accountEmail);
console.log(accountCity);


console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
