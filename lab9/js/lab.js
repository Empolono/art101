// index.js - Lab 9: Libraries & jQuery
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/12/2025

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
