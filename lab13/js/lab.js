// index.js - Conditionals
// Author: Hannah Nielsen
// Date: 11/22/23

//Thanks to ChatGPT
 // FizzBuzz function
 function fizzBuzz() {
    var oneLongString = "";

    for (var num = 1; num <= 200; num++) {
      var str = "";

      if (num % 3 === 0) {
        str += "Fizz";
      }

      if (num % 5 === 0) {
        str += "Buzz";
      }

      if (num % 7 === 0) {
        str += "Boom";
      }

      if (str === "") {
        // If not a multiple of 3, 5, or 7, just append the number
        oneLongString += num + "<br>";
      } else {
        // If a multiple, append the combination of Fizz, Buzz, and Boom
        oneLongString += str + "!<br>";
      }
    }

    // Output the result to the #output div
    $("#output").html(oneLongString);
  }

  // Call the FizzBuzz function
  fizzBuzz();