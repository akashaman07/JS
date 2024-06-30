const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Scope	             Declaration keywords	         Accessible from			
Global	             None (outside any block)    Anywhere in the program			
Local (Function)	 var	                     Within the function and its nested functions			
Block	             let, const	              Within the block where declared (e.g., if, for{})			
*/