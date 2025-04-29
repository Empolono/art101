// index.js - Lab 6: Arrays and Objects
// Author: Nick DeMaggio <ndemaggi>
// Date: 4/28/2025

// variables
myTransport = [" Car", " Bus", " Walking"];

// object
myMainRide = {
  make: "Subaru",
  model: "CrossTrek",
  year: 2013,
  color: "Black",
  own: true,

  age: function() {
    return 2025 - this.year;
  }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

