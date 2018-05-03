//date.js

const date = new Date();
let year = date.getFullYear();
let copyYear = document.getElementById("year");

// copyYear.innerHTML = year;

document.getElementById("date").innerHTML = year;