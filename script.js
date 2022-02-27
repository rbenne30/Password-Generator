// Assignment code here
//var passwordlength = window.prompt("How long would you like your password to be?");

//var passwordText = window.prompt ("Do you want caps?");
//var passwordText = window.prompt ("Do you want lowercase?");
//var passwordText = window.prompt ("Do you want uppercase?");
//var passwordText = window.prompt ("Do you want Numbers");

var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTVWXYZ';
var special = '@!#$*';
var num = '0123456789';
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
var specialCharacters= window.confirm ("Do you want special characters?");
var lowerCase = window.confirm ("Do you want lowercase?");
var upperCase = window.confirm ("Do you want uppercase?");
var numbers = window.confirm ("Do you want Numbers");
var possibleCharacters = ""
if (specialCharacters === true){
  possibleCharacters = possibleCharacters + special
}
if (lowerCase === true){
  possibleCharacters = possibleCharacters + alphaLower
}
if (upperCase === true){
  possibleCharacters = possibleCharacters + alphaUpper
}
if (numbers === true){
  possibleCharacters = possibleCharacters + num
}
console.log (possibleCharacters)
return "password"
}
 

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

