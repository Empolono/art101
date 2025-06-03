// index.js - Lab 15: AJAX
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/28/2025

// when doc ready
$(document).ready(function() {
  // when button clicked
  $("#activate").click(function() {
    // make API call
    $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      type: "GET",
      dataType: "json",

      success: function(data) {
        console.log(data);
        // Display joke in the output div
        $("#output").html("<p>" + data.value + "</p>");
      },

      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").append("<p class='error'>Oops! Something went wrong.</p>");
      }
    });
  });
});
