
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
    var passLength = 0;
    var passSpecial = true;
    var passNum = true;
    var passLow = true;
    var passUpp = true;
    var availChar = [];

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    var passLength = prompt("Length? (8-128 characters)");
  
    var passSpecial = confirm("Include special characters?");
    var passNum = confirm("Include numbers?");
    var passLow = confirm("Include lowercase?");
    var passUpp = confirm("Include uppercase?");

    
    var passFinal = [];
    // var combined = 

    var specChar = ["@", "#", "$", "%", "&", "!", "?"];
    var numChar = ['1', "2", "3","4", "5", "6", "7","8", "9", "0"];
    var lowChar = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppChar = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N' ,'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    characters();
    

    if (passLength>7 && passLength<128) {

    }
  
    

    for (let i = 0; i < passLength.length; i++) {

        
    }

    return "password";
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", writePassword);

function characters (availChar){
    if (passSpecial === true){
        for (let i = 0; i < passSpecial.length; i++) {
            availChar.push(specChar[i])                
        }
    }

    else if (passNum === true){
        var availChar = numChar.concat(availChar);
        for (let i = 0; i < passNum.length; i++) {
            availChar.push(numChar[i])                
        }
    }

    else if (passLow === true){
        var availChar = lowChar.concat(availChar);
        for (let i = 0; i < passLow.length; i++) {
            availChar.push(lowChar[i])                
        }
    }

    else if (passUpp === true){
        var availChar = uppChar.concat(availChar);
        for (let i = 0; i < passUpp.length; i++) {
            availChar.push(uppChar[i])                
        }
    }

    for (let i = 0; i < availChar.length; i++) {
        console.log(availChar[i]);       
        
    }
};

// BONUS EVENT LISTENER
