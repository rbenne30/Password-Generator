// Assignment code here
//var passwordlength = window.prompt("How long would you like your password to be?");

//var passwordText = window.prompt ("Do you want caps?");
//var passwordText = window.prompt ("Do you want lowercase?");
//var passwordText = window.prompt ("Do you want uppercase?");
//var passwordText = window.prompt ("Do you want Numbers");

var alpha = 'abcdefghijklmnopqrstuvwxyz';
var special = '@ ! # $ * ';
var num = ' 123456789101112';
var length = '8-128';



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
var passwordlength = window.prompt("How long would you like your password to be?");
var passwordText = window.confirm ("Do you want caps?");
var passwordText = window.confirm ("Do you want lowercase?");
var passwordText = window.confirm ("Do you want uppercase?");
var passwordText = window.confirm ("Do you want Numbers");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

