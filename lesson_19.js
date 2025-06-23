function one(){
    const username = "Pravinsingh"
    function two(){
        const website = "youtube"
        console.log(username)
        console.log("Inner Two Function")
    }
    // website out-off scope
    // console.log(website)
    two()
    console.log("Outer One Function")
}
// call one function that is outer function 
// one()

// if we call inner fuction in gloable scope without calling outerfunction.
// two()

if(true){
    const username_01 = "Pravinsingh"
    if(username_01 === "Pravinsingh"){
        const website_01 = "Linkdean"
        // console.log(username_01 + " "+website_01)
    }
    // console.log(website_01)
}
// console.log(username_01)

// *************** Intersting ***********
console.log(`Add One Function : ${addone(4)}`)

function addone(num){
    return num+1
}


// if we can access addtwo(5) above side it produce error due it will store inside a variable but when we decaler function that time we cannot get error see addone(4) which can call above defination 
console.log(addtwo(5))
let addtwo = function (num){
    return num+2
}
console.log(addtwo(5))