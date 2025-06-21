// Prompt the user for a number between 0 and 10
let number = prompt('Enter a number between 0 and 10:');

// Convert the input to a number and set to 0 if invalid
number = Number(number);
if (isNaN(number) || number < 0 || number > 10) {
  number = 0;
}

// Start building the HTML output for the multiplication table
let msg = '<h2>Multiplication Table</h2>';

// Use a loop to generate the table from 1 to 10
for (let i = 1; i <= 10; i++) {
  msg += `<p>${i} x ${number} = ${i * number}</p>`;
}

// Insert the table into the page
document.getElementById('output').innerHTML = msg;
