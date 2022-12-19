// Assignment code here


function generatePassword() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const spChars = ['!', '@', '#', '%', '^', '&', '*', '(', ')', '_', '~', '?'];
  const alphs = Array.from(Array(26)).map((e, i) => i + 65);
  const upAlphs = alphs.map((x) => String.fromCharCode(x));
  const lowAlphs = upAlphs.map(letter => letter.toLowerCase());
  
  console.log(lowAlphs);

  return 'PLACEHOLDER TEXT';
}

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
