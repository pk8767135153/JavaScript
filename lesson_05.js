// console.log(2==2);
// console.log(2!=2)
// console.log(6<2)
// console.log(4<=2)
// console.log(4>2)
// console.log(4>=2)

// There are some which create confusion
console.log(null>0) // false
console.log(null>=0) // true
console.log(null==0) // false
console.log(null<0) // false
console.log(null===0)


// below code we  always get false then because compare to undefined we always get false.
// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined>=0)
// console.log(undefined<0)
// console.log(undefined<=0)

/**
 * There is issue inside type conversion because when we compare we we bo 
 *      null>0 --> false but 
 *      null >= 0 --> true 
 *      null==0 --> false
 */


// console.log("hello :"+Boolean(0==0))


