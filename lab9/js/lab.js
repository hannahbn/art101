// index.js - Libraries and jQuery
// Author: Hannah Nielsen
// Date: 11/8/23

//some code is thanks to the examples in the lab and some is from ChatGPT

//Adds buttons to each section
$(".challenge-section").append("<button id='my-button'>Make Special</button>");
$(".problems-section").append("<button id='my-button'>Make Special</button>");
$(".reflection-section").append("<button id='my-button'>Make Special</button>");
$(".results-section").append("<button id='my-button'>Make Special</button>");

//adds an event listener that toggles the class special
$("#my-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".challenge-section").toggleClass("special");
});
$("#my-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".problems-section").toggleClass("special");
});
$("#my-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".reflection-section").toggleClass("special");
});
$("#my-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".results-section").toggleClass("special");
});
//The above was slightly ammended by ChatGpt, specifically making sure to add a # for the my-button id. 