// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Password Length 
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 character");

  if(passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if(passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else if(isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters.");
    determineLength();
  } else {
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
  }
  return passwordLength;
}

// Uppercase Characters 
function determineUppercase() {
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if(uppercaseCheck == null || uppercaseCheck === ""){
      alert("Please answer yes or no.");
      determineUppercase();
    } else if(uppercaseCheck === "yes" || uppercaseCheck === "y" || uppercaseCheck ==="YES"){
      uppercaseCheck = true;
      return uppercaseCheck;
    } else if(uppercaseCheck === "no" || uppercaseCheck === "n" || uppercaseCheck === "NO"){
      uppercaseCheck = false;
      return uppercaseCheck;
    } else {
      alert("Please answer yes or no.")
      determineUppercase();
    }
  return uppercaseCheck;
}

// Number Characters 
function determineNumbers() {
  numberCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if(numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y" || numberCheck === "YES"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n" || numberCheck === "NO"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
  }

  // Special Characters 
  function determineSpecial() {
    specialCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();
  
    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

//Generate Password 
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);
}

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;
} else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

} else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

} else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

} else if (uppercaseCheck){
  characters += uppercaseChar;

} else if(numberCheck){
  characters += numberChar;

} else if (specialCheck){
  characters += specialChar;

} else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Password Input 
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Event Listener 
generateBtn.addEventListener("click", writePassword);