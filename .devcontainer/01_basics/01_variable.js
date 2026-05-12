const accountId = 144553
let accountEmail = "astha28@gmail.com"
var accountPassword = "1234"
accountCity = "Hyderabad"
let accountState;

// accountId=2 //not allowed as const mentioned

accountEmail = "astha87@gmail.com"
var accountPassword = "4321"
accountCity = "Bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])