/**
 * Stack : All Primitive data value store inside stack.
 * 
 */

let myname = "prain"
let anotername = myname;
// here anotername we create new copy of myname variable here we cannot refer myname we just provide reference 
console.log("anotername : "+anotername)
console.log("myname :  "+myname)

anotername = "chaiaurcode"
// console.log("anotername : "+anotername)
// console.log("myname :  "+myname)




/**
 * Non Primitive data store inside heap memory.
 */

let user ={
    email: "uere@gmail.com",
    name : "pravinkorekar"
}
let user01 = user
console.log("user Name : "+user.name+"  User Email : "+user.email)
console.log("user01 Name :  "+user01.name+" User Email : "+user01.email+" ")

user01.email = "jk@yahoo.com"
console.log("user Name : "+user.name+"  User Email : "+user.email)
console.log("user01 Name :  "+user01.name+" User Email : "+user01.email+" ")