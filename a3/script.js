document.getElementById('rhombusForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const oddColor = document.getElementById('oddColor').value;
    const evenColor = document.getElementById('evenColor').value;
    const symbol = document.getElementById('symbol').value;

    const rhombusSection = document.getElementById('rhombus');
    rhombusSection.innerHTML = '';

    generateHalf(height, oddColor, evenColor, symbol, rhombusSection, true); 
    addMiddleBreak(height, rhombusSection); 
    generateHalf(height, oddColor, evenColor, symbol, rhombusSection, false); 
});

function generateHalf(height, oddColor, evenColor, symbol, rhombusSection, isTop) {
    const start = 2;
    const end = height;
    const step = 2;

    for (let i = start; i <= end; i += step) {
        const symbolCount = isTop ? i : end - i + start;
        createLine(symbolCount, height, oddColor, evenColor, symbol, rhombusSection);
    }
}

function addMiddleBreak(height, rhombusSection) {
    const middleLine = document.createElement('div');
    const spaces = '<span style="color:white">*'.repeat(height) + '</span>';
    middleLine.innerHTML = spaces;
    rhombusSection.appendChild(middleLine);
}

function createLine(symbolCount, totalHeight, oddColor, evenColor, symbol, rhombusSection) {
    const line = document.createElement('div');
    const spaces = '<span style="color:white">*'.repeat((totalHeight - symbolCount) / 2) + '</span>';

    let coloredSymbols = '';
    for (let i = 1; i <= symbolCount; i++) {
        coloredSymbols += `<span style="color:${i % 2 === 0 ? evenColor : oddColor}">${symbol}</span>`;
    }

    line.innerHTML = spaces + coloredSymbols + spaces;
    rhombusSection.appendChild(line);
}

