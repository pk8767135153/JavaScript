/**
 * Objects : 
 * 
 *  singleton : when we create object literals way that time we cannot make singleton
 */

// Object.create()

// This Object Literals
// const jsUser = {} // empty object
const jsUser = {
    name:"Pravin",
    score: 89
}

// here we write name by inside system all key trit as string like "like"

// There are two way to access value inside object 
// 1st way to access value inside object but this is not good way beacuse if we have key like 'full name' that time we use sencond systax
// console.log(jsUser.name);

// 2ed  way to access value inside object
// console.log(jsUser["name"])

// console.log(typeof jsUser["name"])
// console.log(typeof jsUser["score"])


// ---------------------------------------------------------------
// Interview Question ---------------------------------------------------------------
// to use symbol inside object as key

let symbol = Symbol('symbol_01')

let object_01 = {
    name: "Pravin",
    score : 99,
    [symbol] : 234 // that is symbol
}

// To access symbol
// console.log(object_01[symbol])
// console.log(object_01)


console.log(jsUser)
// change the value
// jsUser["name"] = "Pravinsingh"
// console.log(jsUser)
// ---------------------------------------------------------------


let object_02 = {
    name: "Pravin",
    score : 99,
    [symbol] : 234 // that is symbol
}
// console.log(object_02)

// change score 
object_02['score'] = 100

//Freeze the object 
// Object.freeze(object_02)

// if we freeze the object we cannot make change inside that object
object_02['name'] = "Pravinsingh" // this change is not applicable due to we freeze the object
// console.log(object_02)

object_02.greeting = function(){
    console.log(`Hello JS User.`)
}

object_02.greeting_01 = function(){
    console.log(`Hello JS User. ${this.name}`)
}

console.log(object_02)
// call the anonymous function inside the object
console.log(object_02.greeting())
console.log(object_02.greeting_01())