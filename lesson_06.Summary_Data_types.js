/**
 * Types of DataTypes 
 *          
 *          1. Primitive : 
 *                  1. 7 catagories 
 *                  2. What is primative : when we call the     
 *                      primitive we getting copy of that specific 
 *                      value not reference of that value.
 *                  3. Note : Symbol is immuatable datatype but 
 *                      anoter are mutable data type
 *                  a. String
 *                  b. Number
 *                  c. Boolean
 *                  d. Null : (Object Type)
 *                  e. Undefined : (Undefined Type)
 *                  f. Symbol : Unique
 *                  g. BigInt
 * 
 *          2. Reference(Non-Primitive)
 *              // Array, Objects, Function
 *              // Non-primitive always return object
 * 
 */

let symbol_ = Symbol(1234)
symbol_ = Symbol(23)
// const big_int = 234567885457854678765645
console.log(typeof symbol_)
const hero = ["shaktiman", "naagraj", "doga"]

let person = {
    name:"Hitesh",
    age: 22
}


const myfunction = function myfunction(){}

// typeof(variable_name)
console.log(typeof hero)
console.log(typeof person)
console.log(typeof myfunction)