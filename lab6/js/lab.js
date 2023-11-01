// index.js - Arrays and Objects
// Author: Hannah Nielsen
// Date: 10/27/23


// let's get this party started
//Defining variables
myTransport = ["legs", "bus", "bike", "2008 honda element with broken passenger door", ];

// creating an object for my ride
myMainRide = {
  Make:"BMW",
  Model:"325i",
  Color: "black",
  Year: 2005,
  age:function(){
    return 2023 - this.year;
},
};

 //output
document.writeln ("My Types of Transportation:", myTransport,"</br>");

//how to write an object to the document
document.writeln ("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
