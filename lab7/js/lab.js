// index.js - Lab 7: Functions
// Author: Nick DeMaggio <ndemaggi>
// Date: 5/1/2025

// function
function sortUserName() {
  userName = window.prompt("Please enter your name.");
  console.log('Name: ', userName);
  nameArray = userName.split('');
  console.log('Name: ', nameArray);
  arraySort = nameArray.sort();
  console.log('Name: ', arraySort);
  sortedName = arraySort.join('');
  console.log('Name: ', sortedName);
  return sortedName;
}

// output
document.writeln("Your sorted name is: " + sortUserName() + '</br>');

