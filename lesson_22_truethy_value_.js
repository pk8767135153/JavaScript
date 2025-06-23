/**
 * falsy Values: (False Value)
 *  false, 0, -0, BigInt 0n,"",null, undefined, NaN
 * 
 * 
 * Truethy Value:
 *  "0", "false"," ",[],{},function(){}
 */
/**
 * Note :
 * false == 0 :--> true
 * false =="" :--> true
 * 0 =="" :--> true
 */

const emptyObject = {}
if(Object.keys(emptyObject).length ===0){
    console.log("Object is Empty");
    
}

// New JS Operator
/**
 * Nullish Coalescing Operator(??): null undefined
 * When we are working Database there are chance to get null or undefined value so we cannot store value inside the variable because we can fase the error in functure opeation that time we use Nullish Coalescing Operator
 */

let val1, val2, val3, val4, val5,val6;
val1 = 5 ?? 10 ?? 88
val2 = null ?? 4 ??32
val3 = undefined ?? 6
val4 = 43 ?? null;
val5 = 90 ?? undefined;
val6 = undefined ?? null
console.log(`val1  : ${val1}\nval2  : ${val2}\nval3  : ${val3}\nval4  : ${val4}\nval5  : ${val5}\nval6  : ${val6}\n`)

// Ternary Operator
// condition?true:false
let a = 10
a<=30? console.log("Greater"):console.log("Less Than")
