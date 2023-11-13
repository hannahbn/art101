// index.js - Anon Functions and Callbacks
// Author: Hannah Nielsen
// Date: 11/3/23

//Array with assigned numbers
var myArray = [1, 7, 2, 10];

//function that will take a number x and add 20
function myFunct(x){
    var results = x + 20;
    return results;
}
//printing results for different numbers

//uses map on the funtion as a callback 
myArray.map(myFunct);
 // results 

//uses an anonymous function as a callback with map to multiply by 8
myArray.map(function(x){
    var results = x * 8
    return results;
});
// results 
console.log(myArray.map(myFunct));
console.log(myArray.map(function(x){
    var results = x * 8
    return results;
}));


