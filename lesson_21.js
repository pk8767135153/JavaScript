// refer image Execution Phase
/**
 * Javascript Execution Context: 
 *  js has two phase to run js code 
 *  We have Different Execution Context:
 *      1. Global Execution Context
 *      2. Function/Functional Excution Context
 *      3. Eval Execution Context
 *      
 *  Senario : If we can provide js file to very first we make Global Execution Context but browse and nodejs both having different Global context (In browzer case this keyword value in window )
 * 
 * We have 2 Phase:
 *      --> 1. Memory Creation Phase
 *      --> 2. Execution Phase
 */

// Let Understand Example
let val1 = 10 // here val1 
let val2 = 5
function addNum(num1,num2){
    let total = num1+ num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)



/**
 * Explain: 
 *          Note 1: Global Execution
 *                 Every and each Program 
 *                 assign inside this key 
 *                 during Global Execution 
 * 
 *          Phase 1 : Memory Phase
 *              First-cycle:
 *              val1 --> undefined 
 *              val2 --> undefined
 *              addNum--> fuction_defination
 *              result1 --> undefined
 *              result2 --> undefined
 *         
 *          Phase 3: Second Cycle/ ExectionPhase
 *              val1 --> 10
 *              val2 --> 5
 *              addNum--> [New variable Environment + Execution Thread]
 *              result1 = 15
 *              result2 = addNum--> [New variable Environment + Execution Thread]
 * 
 *              ( addNum : -> this function create new 
 *                      execution context box agin)
 * 
 *          Note 2 : when you can run function that time it will create 
 *              new execution context agin and agin that means (number of
 *              function call == number of function execution box will be
 *               created) 
 *          
 *          Note 3: After execution is done the function function execution context will be destroed automatically
 *          Note 4: return return value inside global execution context
 */



/**
 * Call Stack : LIFO(Last In First Out) Concepts is here 
 * 
 *          
 */

function one(){
    console.log("One")
    two()
}
function two(){
    console.log("Two")
    three()
}
function three(){
    console.log("Three")
}
one()
two()
three()

/**
 * Call Stack Here is :
 *  Step 0: none
 *  Step 1: one()
 *  Step 2: one() -> two()
 *  Step 3: one() -> two() ->three()
 *  Step 4: one() -> two() 
 *  Step 5: one()
 *  Step 6: none
 *  Step 7: two() 
 *  Step 8: two() -> three()
 *  Step 9: two() 
 *  Step 10: none
 *  Step 11: three()
 *  Step 12: none
 */