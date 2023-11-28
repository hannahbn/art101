// index.js - Functions
// Author: Hannah Nielsen
// Date: 11/1/23

//Making a function to sort string alphabetically while ignoring caps
// Creating a function to compare the strings and sort them alphabetically regardless of case
// Credit to Stack Overflow - How Do You Sort Letters in JavaScript with Capital & Lowercase Letters Combined?
function caseSensitive(stringA, stringB) {
    return stringA.toLowerCase().localeCompare(stringB.toLowerCase());
}

function sortingUserName() {
    var userName = window.prompt("Give me your name.");
    console.log("userName = ", userName);

    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);

    var caseSens = nameArray.sort(caseSensitive);
    console.log("caseSens = ", caseSens);

    var nameSorted = caseSens.join('');
    console.log("nameSorted = ", nameSorted);

    // Target the "output" div and write the results into it
    document.getElementById("output").innerHTML = "I fixed your name: " + nameSorted;
}

// Call the sortingUserName function when the page is loaded
sortingUserName();