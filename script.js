// Assignment code here
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const special = '@ ! # $ * ';
const num = '';
const length = '8-128';
const confirm = ("Do you want caps?")
const confirm = ("Do you want lower case?")
const confirm = ("Do you want uppercase?")
const confim = ("Do you want Numbers")



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