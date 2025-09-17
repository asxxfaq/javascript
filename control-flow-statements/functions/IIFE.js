//immediately invoked function expression(IIFE)
//----key feature ----
// immediately invoked
// data privacy-variables defined inside iife are not accessible outside
//closure- is a concept in programming (especially in JavaScript) where a function remembers the variables from the place it was created, even if it’s called somewhere else.
//self contain - execute independently  without affecting surrounding code

(function(){
    console.log("i'm invoked");
})();