// Scope
let a = 90
if(true){
    // local,changeable
    let a = 10
    console.log(`Inner Scope a is : ${a}`)
    // local,unique, not-changeable 
    const b  = 20
    console.log(`Inner Scope b is : ${b}`)
    // gloable, changeable
    var c = 30
    console.log(`Inner Scope c is : ${c}`)
}

console.log(`Outer Scope a is : ${a}`)

console.log(`Outer Scope c is : ${c}`)
c = 40
console.log(`Outer Scope c is : ${c}`)