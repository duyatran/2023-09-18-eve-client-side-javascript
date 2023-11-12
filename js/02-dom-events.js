// Add a new todo item when user submits the form
// with <input> being the item

// Grab the <form> element
const form = document.querySelector('form');

// Grab the input field
const input = document.getElementsByTagName('input')[0];

// Grab the <ul> element (list)
const ul = document.querySelector('ul');

// handle "submit" event
form.addEventListener('submit', (event) => {
  // do not actually "submit" anything or navigate away
  event.preventDefault();

  // console.log(event);

  // Create an li element
  const li = document.createElement("li");
  // console.log('input', input);

  // Add text content to it
  li.textContent = input.value;

  // Append todo item to list
  ul.appendChild(li);

  // Clear input
  input.value = '';

});
