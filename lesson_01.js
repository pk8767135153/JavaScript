// Constant Variable account_id
const account_id = 1232323;

// Local Scope
let accountEmail = "pravin@gmail.com";

// Gloable Variable
var account_pass = "Pune";

// Undefine Variable 
let account_state;


// account_id = 3
console.log("account Id : "+ account_id);


console.table([account_id,accountEmail,account_pass, account_state]);



/*
 * Prefer not to use var 
 * because of issue in block scope and functional scope
 */
