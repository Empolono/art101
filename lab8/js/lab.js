// index.js - Lab 8: Anon Functions and Callbacks
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/8/2025

// function
function isEven(x){
  return(x % 2 == 0);
}

// test
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var results = array.map(isEven);
console.log("Test of evenness of array ", results);

var result = array.map(function(x){
  return x ** 0.5;
})

// output
console.log("Squareroot of array: ", results);
