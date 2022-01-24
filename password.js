
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome!", function(input){
	pass = input.split(' ');
	
    // const passValue = /[10-100]/g;

	// passValidate = pass[0];
	let passValue = input;
    
   if( passValue.length >= 10){
    console.log("Password Accepted")
  }
  else {console.log("Needs more characters")}


reader.close()
});