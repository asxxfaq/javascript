const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the age: ", (input) => {
  let age = Number(input);
  let result = (age >= 18) ? "adult" : "minor";
  console.log(result);
  rl.close();
});
