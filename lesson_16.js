/**
 * Function : 
 */

// Define the Function
// normal function
function myfun(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("i");
    console.log("n");
    console.log("g");
    console.log("h");
}

console.log("Function Reference")
console.log(myfun)

// call the function
// myfun()
// parameterized function : function fun_name(para1,par2,..){//function code}
function addTwoNumbers(number1, number2){
    console.log(`Addition is ${number1+number2}`)
}

// call paramerized function
// function_name(arrgument1, arrgument2,....)
addTwoNumbers(3,null)

let result = addTwoNumbers(3,5)
console.log(`Result is   ::  ${result}`)
// we get undefined because we cannot return anythings

function addTwoNumbers(number1, number2){
    // console.log(`Addition is ${number1+number2}`)
    return number1+number2
}

function loginUserMessage(username){
    return `${username} just logged in.`
}
// loginUserMessage("Prainsingh")

// if we cannot provide parameter that time we get undefined
console.log(loginUserMessage())

function loginUserMessage(username){
    
    if(!username){
        // In javascript undefined or null is equal to false
        // there for we change the condition that previous condition is username===undefined but we make the !username so if !undefined is equal to true
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}