/**
 * Arrow Function :
 * 
 * This keyword : 
 */

const user = {
    username:"Pravinsingh",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to Website`)
    }
}

// user.welcomeMessage()
user.username = "Priyanka"
// user.welcomeMessage()

// console.log(this)
// but this statement run inside broser that time we get window()
// Global Object inside Broser that is window.



// ---------------------------------------

function chai(){
    let username_02 = "PK_01"
    console.log(this.username)
    // inside function we use this keyword that time we get undefined as output
}
// chai()


const chai_01 = function(){
    let username_03 = "Pravin"
    console.log(` Inside function this will return undefined value : \nHere Proof :: ${this.username_03}`)
}
// console.log(chai_01)


// -------------------------------------------------------------------------------------------------

const first_arrow_fun = () =>{
    let username_04 = "Pravinsingh Korekar"
    console.log(` Inside array Function :: ${this.username}`)
}
first_arrow_fun()

// Way to Create Arrow Function

// First Way (Explicity return used )
const addtwo = (num1, num2)=>{
    return num1 + num2
}

// Second Way (inplicity return used )
const addtwo_01 = (num1, num2) => num1 + num2

// Second way using round brakets (inplicity return used )
const addtwo_02 = (num1, num2) => (num1 + num2)


console.log(addtwo(20,33))
console.log(addtwo_02(9090,34343))

const return_object = (num1, num2) => ({username:"Pravinsingh Arun Korekar"})
console.log(return_object(2,3))

const return_object_ = () => ({username:"Pravinsingh Arun Korekar"})
console.log(return_object_())
