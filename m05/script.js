function generateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const output = document.getElementById('output');

    // Validate input
    if (numberInput !== '' && !isNaN(numberInput) && numberInput >= 0 && numberInput <= 10) {
        const number = Number(numberInput);
        let msg = '<h2>Multiplication Table</h2>';

        for (let i = 1; i <= 10; i++) {
            msg += `<p>${number} x ${i} = ${number * i}</p>`;
        }

        output.innerHTML = msg;
    } else {
        output.innerHTML = "<p>Please enter a valid number between 0 and 10.</p>";
    }
}

function resetTable() {
    document.getElementById('numberInput').value = '';
    document.getElementById('output').innerHTML = '';
}

document.getElementById('generateBtn').addEventListener('click', generateTable);
document.getElementById('resetBtn').addEventListener('click', resetTable);
