// index.js - Lab 12: Conditionals
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/22/2025

// This function takes a string and returns a Hogwarts house
function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  // determine the house based on the mod result
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Hufflepuff";
  } else if (mod == 2) {
    return "Ravenclaw";
  } else {
    return "Slytherin";
  }
}

// click listener for sorting button
$("#button").click(function() {
    // get the name input value
    const name = $("#input").val();
    // determine the house
    const house = sortingHat(name);

    // delete previous result
    $("#output").find(".text").remove();
    // append a new styled paragraph with the result
    $("#output").append(
      '<div class="text"><p>The Sorting Hat has sorted you into ' + house + '!</p></div>'
    );
});
