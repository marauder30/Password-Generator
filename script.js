var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var special = "~!@#$%^&*()-_+=.,?";
var upperArray = upper.split("");
var lowerArray = lower.split("");
var numArray = num.split("");
var specialArray = special.split("");
var randUpper = upperArray[Math.floor(Math.random() * upperArray.length)];
var randLower = lowerArray[Math.floor(Math.random() * lowerArray.length)];
var randNum = numArray[Math.floor(Math.random() * numArray.length)];
var randSpecial = specialArray[Math.floor(Math.random() * specialArray.length)];


var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');


// generateEl.addEventListener("click", function() {
//     var length = lengthEl.Value;
//     console.log(length);
// })

console.log(randUpper);
console.log(randLower);
console.log(randNum);
console.log(randSpecial);

generateEl.addEventListener("click", function() {
    
})



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





//write password to page using appendChild

//second button to 