// var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
// var numArray = "0123456789".split("");
// var specialArray = "~!@#$%^&*()-_+=.,?".split("");
// var allSelected = 


//vvv these currently reside globally. this makes the characters stick to to one
//     per type. they should exist within functions
// var randUpper = upperArray[Math.floor(Math.random() * upperArray.length)];
// var randLower = lowerArray[Math.floor(Math.random() * lowerArray.length)];
// var randNum = numArray[Math.floor(Math.random() * numArray.length)];
// var randSpecial = specialArray[Math.floor(Math.random() * specialArray.length)];

// console.log(randUpper);






// var resultEl = document.getElementById('result');
// var lengthEl = document.getElementById('length');
// var uppercaseEl = document.getElementById('uppercase');
// var lowercaseEl = document.getElementById('lowercase');
// var numbersEl = document.getElementById('numbers');
// var symbolsEl = document.getElementById('symbols');
// var generateEl = document.getElementById('generate');
// var clipboardEl = document.getElementById('clipboard');

// var totalCharEl = parseInt(lengthEl);
// var possibleChar = "123";
// var totalChar = "";
// var charResult = "";



//    var value = this.value;
//    console.log(value);
//    if (value === true) {
//        possibleChar = possibleChar.push(randUpper);
//        console.log(possibleChar);
//    }
// ;

// result.textContent


// function newPassword() {
//     if (uppercaseEl === true) {
//         possibleChar = possibleChar.concat(upperArray);
//         totalChar.push(randUpper);
//     }
//     if (lowercaseEl === true) {
//         possibleChar = possibleChar.concat(lowerArray);
//         totalChar.push(randLower);
//     }
//     if (numbersEl === true) {
//         possibleChar = possibleChar.concat(numArray);
//         totalChar.push(randNum);
//     }
//     if (symbolsEl === true) {
//         possibleChar = possibleChar.concat(specialArray);
//         totalChar.push(randSpecial);
//     }
// }




// console.log(uppercaseEl);

// //                               
// generateEl.addEventListener('click', function (event) {
//     event.preventDefault();
//     generator = generateEl.value;
//     if (uppercaseEl.checked === false) {
//       console.log("You must select at least one character type!");
//   };
// });







//var length = lengthEl.value

// generateEl.addEventListener("click", function() {
//     var length = lengthEl.Value;
//     console.log(length);
// })

// console.log(randUpper);
// console.log(randLower);
// console.log(randNum);
// console.log(randSpecial);


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



        var resultField = document.getElementById("result");
        
        // var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        // var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
        // var numArray = "0123456789".split("");
        // var specialArray = "~!@#$%^&*()-_+=.,?".split("");
        var emptyArray = [];
        var finalArray = [];
        var passwordArray = [];
        
        var upperChar = confirm("Would you like to use upper case letters? OK for yes, cancel for no.");
        var lowerChar = confirm("Would you like to use lower case letters? OK for yes, cancel for no.");
        var numericalChar = confirm("Would you like to use numerical characters? OK for yes, cancel for no.");
        var specialChar = confirm("Would you like to use special characters? OK for yes, cancel for no.");
        
        
        if (!upperChar && !lowerChar && !numericalChar && !specialChar) {
            alert("You must choose at least one character type!");
        } else {    
            var characterCount = prompt("Please choose how many characters you would like your password to include, between 8 and 128.");
            var charCount = parseInt(characterCount);
            
            
            if (charCount < 8 || charCount > 128) {
                alert("You must select within a valid range!");
            } else {
                if (upperChar) {
                    emptyArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
                }
                if (lowerChar) {
                    emptyArray.push("abcdefghijklmnopqrstuvwxyz".split(""));
                }
                if (numericalChar) {
                    emptyArray.push("0123456789".split(""));
                }
                if (specialChar) {
                    emptyArray.push("~!@#$%^&*()-_+=.?".split(""));
                }
                
                function charString() {
                    var allChar = emptyArray.toString();
                    finalArray.push(allChar);
                }
                
                charString();

                var finalestArray = finalArray[0].split(",");


                // use characterCount var to gather how many times we need to loop

                for (var i = 0; i < characterCount; i++) {


                 var random = finalestArray[Math.floor(Math.random() * finalestArray.length)];
                 
                 passwordArray.push(random);


                 
                 console.log(random);


                }

                console.log(passwordArray);

                var password = passwordArray.join("");

                console.log(password);


                // create a for loop with i < characterCount



                // math.floor/math.random magic to generate 1 character per loop


                // make a variable to store the result


                // print the result to the resultField var



                // make sure it ends up on the page!


                // add a clipboard click event!





                
                
                
                
            }
        }
        //     for (var i = 0; i < characterCount)    
        // }


// math.floor for the object array!

// create a function to make a new array with the characters chosen
// generate the password
// maclunkey
// go buy a notebook
// 
// for each loop, characterCount captures how many iterations!
//
// remove one button, make the other copy to clipboard
//
