//arrow function is a shorter syntax for writing functions in js introduced in ES-6(ecma script)
//syntax
// const handleSubmit= () =>{
//     //block of code
// }
//function declaration
// function add(a, b) {
//     return a + b;
// }
// add(2,4)
// console.log(add(2,4));

//arrow function
const add = (a, b) => a + b;
console.log(add(2, 2));

//----single parameters(no paranthesis needed)----
const square = x => x * x;
console.log("square of 4:", square(4));
//---No parameters(empty paranthesis)---
const greet = () => console.log("hellooo");
greet();
//---multi line functions ---
const divide = (a, b) => {
    const result = a / b;
    return result;
}
console.log("division of 10/2 is:", divide(10, 2));

const num = (a,b) => {
    const result= a*a;
    return result;
}
console.log("square of 7 is",num(7,7));

