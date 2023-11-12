// jQuery()
// jQuery == $

// Add a new todo item when user submits the form
// with <input> being the item

// Grab the <form> element
// const form = document.querySelector('form');
const $form = $('form');

// Grab the input field
// const input = document.getElementsByTagName('input')[0];
const $input = $('#new-to-do');

// Grab the <ul> element (list)
// const ul = document.querySelector('ul');
const $ul = $('ul');

$form.on('submit', (event) => {
  event.preventDefault();

  // // Create an li element (raw text HTML way)
  // const liRaw = `<li>${$input.val()}</li>`
  // // Append todo item HTML to list
  // $ul.append(liRaw);

  // Create an li element with the input value
  // Note $("li") selects an <li> element
  // while $("<li>") creates a new <li> element
  var $li = $("<li>").text($input.val());
  // Append the new li element to the ul
  $ul.append($li);

  // Clear input
  $input.val('');
})
