// index.js - Lab 9: Libraries & jQuery
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/12/2025 - updated 5/28/2025

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("specialChallenge");
});

$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function(){
    $("#problems").toggleClass("specialProblems");
});


$("#reflection").append("<button id='button-reflection'>Make Special</button>");
$("#button-reflection").click(function(){
    $("#reflection").toggleClass("specialReflection");
});

$("#links").append("<button id='button-links'>Make Special</button>");
$("#button-links").click(function(){
    $("#links").toggleClass("specialLinks");
});