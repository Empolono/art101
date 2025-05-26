// index.js - Lab 13: Loops
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/26/2025

// variable
let STR = "";

// function
for (let i = 1; i <= 200; i++) {
  let str = "";
  
// calculate
  if (i % 3 === 0) str += "Fizz";
  if (i % 5 === 0) str += "Buzz";
  if (i % 7 === 0) str += "Boom";

// format
  if (str === "") {
    str = i;
  } else {
    str = i + " " + str + "!";
  }

// make output
  STR += str + "<br>";
}

// output
$("#output").html(STR);
