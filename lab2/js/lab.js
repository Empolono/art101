// Lab.js - HTML & CSS Starter
// Author: Nick DeMaggio
// Date: 4/13/2025

function send_message(param1, param2) {
  return `
    <h1>Hello World</h1>
    <p>I have already had a few classes with Julie and i think they are a great partner. This is because we both procrastonate but we always follow through. :)</p>
  `;
}
function main() {
  console.log("Main function started.");
  const message = send_message();
  document.getElementById("output").innerHTML = message;
}

main();
