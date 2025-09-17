//function passing another function as an argument
//feature
// it handle asynchronous(things can happen independently, without waiting for each other.) operations
// customise behaviour of general purpose function
// avoid blocking code execution
//this is our call back function
function greetUser(name){
    console.log(`helloo ${name}`);   
}
//this function takes another function(callBack function)as an parameter
function getUserInput(callback){
    const name= "mufeeda" ;
    callback(name);//calling the callback function with the user's name
}
getUserInput(greetUser);

//callBackhell-pyramid of doom
//multiple nested call backs make the code difficult to read and maintain 
