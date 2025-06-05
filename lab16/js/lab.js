// index.js - Lab 16: JSON and APIs
// Author: Nick DeMaggio <ndemaggi>
// Date: 6/5/2025

// wait for document
$(document).ready(function() {
  // label button
  $("#activate").text("Load XKCD Comic");
  // when button clicked, make API call
  $("#activate").click(function() {
    $.ajax({
      url: "https://xkcd.com/info.0.json",
      type: "GET",
      dataType: "json",
      success: function(comicObj) {
        // Clear content - #output
        $("#output").empty();

        // create section for comic
        var section = $("<section></section>");
        // create title - comicObj.title
        var title = $("<h2></h2>").text(comicObj.title);

        // create img w/ src, alt, and title
        var image = $("<img>")
          .attr("src", comicObj.img)
          .attr("alt", comicObj.alt)
          .attr("title", comicObj.alt);
        // append everything
        section.append(image);
        section.append(title);

        // append section - #output
        $("#output").append(section);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").text("Failed to load comic. Please try again.");
      }
    });
  });
});
