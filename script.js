// var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lower = "abcdefghijklmnopqrstuvwxyz";
// var num = "0123456789";
// var special = "~!@#$%^&*()-_+=.,?";             REDUNDANT CODE
// var upperArray = upper.split("");
// var lowerArray = lower.split("");
// var numArray = num.split("");
// var specialArray = special.split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numArray = "0123456789".split("");
var specialArray = "~!@#$%^&*()-_+=.,?".split("");
// var allSelected = 

var randUpper = upperArray[Math.floor(Math.random() * upperArray.length)];
var randLower = lowerArray[Math.floor(Math.random() * lowerArray.length)];
var randNum = numArray[Math.floor(Math.random() * numArray.length)];
var randSpecial = specialArray[Math.floor(Math.random() * specialArray.length)];

console.log(randUpper);






var resultEl = document.getElementById('#result');
var lengthEl = document.getElementById('#length');
var uppercaseEl = document.getElementById('#uppercase');
var lowercaseEl = document.getElementById('#lowercase');
var numbersEl = document.getElementById('#numbers');
var symbolsEl = document.getElementById('#symbols');
var generateEl = document.getElementById('#generate');
var clipboardEl = document.getElementById('#clipboard');

var totalCharEl = parseInt(lengthEl);
var possibleChar = "123";
var totalChar = "";
var charResult = "";

$('#uppercase').on('change', function(){
//     if ((uppercaseEL).is(':checked')) {
//   alert("hi");
// }
   var value = this.value;
   console.log(value);
   if (value === true) {
       possibleChar = possibleChar.push(randUpper);
       console.log(possibleChar);
   }
});




function newPassword() {
    if (uppercaseEl === true) {
        possibleChar = possibleChar.concat(upperArray);
        totalChar.push(randUpper);
    }
    if (lowercaseEl === true) {
        possibleChar = possibleChar.concat(lowerArray);
        totalChar.push(randLower);
    }
    if (numbersEl === true) {
        possibleChar = possibleChar.concat(numArray);
        totalChar.push(randNum);
    }
    if (symbolsEl === true) {
        possibleChar = possibleChar.concat(specialArray);
        totalChar.push(randSpecial);
    }
}




console.log(uppercaseEl);


generateEl.addEventListener('click', function(e) {
    if (uppercase && lowercase && numbers && symbols === false) {
        alert("You must select at least one character type!");
  }

} );








//var length = lengthEl.value

// generateEl.addEventListener("click", function() {
//     var length = lengthEl.Value;
//     console.log(length);
// })

console.log(randUpper);
console.log(randLower);
console.log(randNum);
console.log(randSpecial);


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 




//function randomLower() {
    //    return String.    
    
    


//button eventlistener when clicked will generate password 

//prompt or slider "please define a value between 8-128 to determine how long your 
//  password will be."

//prompt or checkbox "do you want to use upper case letters?"

//prompt  or checkbox "do you want to use lower case letters?"

//prompt  or checkbox "do you want to use numbers?"

//prompt or checkbox "do you want to use special characters?"

// IF (upper && lower && numbers && special === checkbox.no) {
//    alert(`You must select at least one type of character!`)
// } else {

//  generate password here! :D
//}

//user must specify at least one character 





