// console.log("title 1:", document.title);

// document.title = "This is a new title";

// console.log("title 2:", document.title);

// console.log("document.body:", document.body);

// print out the content of the h1 element
const h1Elem = document.querySelector('h1');
console.log('h1 element', h1Elem);
console.log('h1 element textContent', h1Elem.textContent);

// Add number Four to list of favorite numbers
// create <li></li> element
const li = document.createElement("li"); // <li></li>
const liTextNode = document.createTextNode("Four"); // "Four" node
li.appendChild(liTextNode); // <li>Four</li>

const ul = document.getElementById("main-list") // <ul>

ul.appendChild(li); // append our <li>Four</li> to the end of <ul>
