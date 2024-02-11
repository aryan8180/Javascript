const accountId = 144553
let accountEmail = "aryansharmabkvv@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState

// accountId = 2  // Not allowed

accountEmail = "AS@gmail.com"
accountPassword = "98765"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])