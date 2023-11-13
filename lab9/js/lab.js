// index.js - Libraries and jQuery
// Author: Hannah Nielsen
// Date: 11/8/23

//some code is thanks to the examples in the lab and some is from ChatGPT

// Adds buttons to each section
$(".challenge-section").append("<button id='challenge-button'>Make Special</button>");
$(".problems-section").append("<button id='problems-button'>Make Special</button>");
$(".reflection-section").append("<button id='reflection-button'>Make Special</button>");
$(".results-section").append("<button id='results-button'>Make Special</button>");

// Adds an event listener that toggles the class "special" for each section
$("#challenge-button").click(function(){
    $(".challenge-section").toggleClass("special");
});

$("#problems-button").click(function(){
    $(".problems-section").toggleClass("special");
});

$("#reflection-button").click(function(){
    $(".reflection-section").toggleClass("special");
});

$("#results-button").click(function(){
    $(".results-section").toggleClass("special");
});
//The above was slightly ammended by ChatGpt, specifically making sure to add a # for each button. 