let number = prompt('Enter a number between 0 and 10:');

number = Number(number);
if (isNaN(number) || number < 0 || number > 10) {
  number = 0;
}

let msg = '<h2>Multiplication Table</h2>';

// Use a loop to generate the table from 1 to 10
for (let i = 1; i <= 10; i++) {
  msg += `<p>${i} x ${number} = ${i * number}</p>`;
}

// Insert the table into the page
document.getElementById('output').innerHTML = msg;
