



        var resultField = document.getElementById("result");
        var clipboard = document.getElementById("clipboard");
        
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
            location.reload();
        } else {    
            var characterCount = prompt("Please choose how many characters you would like your password to include, between 8 and 128.");
            var charCount = parseInt(characterCount);
            
            
            if (charCount < 8 || charCount > 128) {
                alert("You must select within a valid range!");
                location.reload();
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


                for (var i = 0; i < characterCount; i++) {


                 var random = finalestArray[Math.floor(Math.random() * finalestArray.length)];
                 
                 passwordArray.push(random);

                
                }
            }
}                
                var password = passwordArray.join("");

                console.log(password);

                document.getElementById("result").innerHTML = password;

                clipboard.addEventListener("click", function(event) {
                    event.preventDefault();
                    var resultField = document.getElementById("result");
                    resultField.select();
                    document.execCommand("copy");
                    alert("Copied the password: " + resultField.value);
                })

            



            