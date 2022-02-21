// Assignment code here
var passwordGen = window.prompt("How long would you like your password to be?");
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const special = '@ ! # $ * ';
const num = '';
const length = '8-128';
const confirm = ("Do you want caps?");("Do you want lowercase?");("Do you want uppercase?")
("Do you want Numbers")



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
addEventListener(type, listner, options);