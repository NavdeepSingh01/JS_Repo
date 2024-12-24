/*
    Variables
*/

const accountId=14556
let accountEmail="xyz@gmail.com"
var accountPassword="Navdeep"
accountCity="Raipur" // wil not give error
let accountState

// accountId=2 not allowed -> declared as const can not be modified
accountEmail="new@gmail.com" //can be modified

console.log(accountEmail) // to print one value
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//two ways to declare variable -> var & let

/*
    var kabhi use mat karo plss 
    block scope ki aissi taisi
*/

//accountState will be -> Undefined