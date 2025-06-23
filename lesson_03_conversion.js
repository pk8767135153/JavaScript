let score = 33

// console.log("Score is "+score+" Type of Value "+typeof score);

// score = String(score)
// console.log("Score is "+score+" Type of Value "+typeof score);

// score = "3a3"
// console.log("Score "+score+" \n"+Number(score))

/*
 * "33" => 33
 * "33abc" => NaN
 * true => 1; false = 0
 */

let isLoggedIn = 1
console.log("Before Conversion Value Is  :"+isLoggedIn+" : Type is "+typeof(isLoggedIn));

isLoggedIn = Boolean(isLoggedIn)
console.log("After Conversion Value Is : "+isLoggedIn+" : Type is "+typeof(isLoggedIn));


isLoggedIn = 0
console.log("Before Conversion Value Is : "+isLoggedIn+" : Type is "+typeof(isLoggedIn));

isLoggedIn = Boolean(isLoggedIn)

console.log("After Conversion Value Is  :"+isLoggedIn+" : Type is "+typeof(isLoggedIn));



let someNumber = 44
console.log("Before Convert 44 to string  :"+someNumber+"  : Type is : "+typeof(someNumber))
someNumber = String(someNumber)
console.log("After Convert 44 to string  :"+someNumber+"  :Type is : "+typeof(someNumber))


// string to boolean
someNumber = Boolean(someNumber)
console.log("After Convert String To Boolean : "+someNumber+" :Type is : "+typeof(someNumber))