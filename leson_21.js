// Immediately Invoked Function Expressions (IIFE)
function chai(){
    console.log(`DB Connected`)
}

/**
 * why we use the IIFE ?
 * due to gloable variable cause the problem there for we can use IIFE
 * above code we create chai function firstly then we can call the function Immediately below that chai function so there is concept call Immediately Invoked Function Expressions (IIFE)
 * let see we have two round brakets 
 * 
 * (function_defiantion)();
 * 
 * explation : 
 *  1st round brakets contain : function definition 
 * 
 * 2ed round brakets contain : nothing means empty brakets so that means we call the above function which return inside () breaketes
 * 
 */

(function pani(){
    console.log(`Pani Connects`)
})();

(() => {
    console.log(`Semi Comm play most value role here it will say stop execution above function till here so we can write our next IIFE function`)
})();


console.log(chai())

((n_name) => {
    console.log(`Welcome TO ${n_name}`)
})("Kore");