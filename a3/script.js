/**
 * Handles form submission and generates the rhombus pattern
 */
document.getElementById('rhombusForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const oddColor = document.getElementById('oddColor').value;
  const evenColor = document.getElementById('evenColor').value;
  const symbol = document.getElementById('symbol').value;

  const rhombusSection = document.getElementById('rhombus');
  rhombusSection.innerHTML = ''; // Clear previous result

  generateHalf(height, oddColor, evenColor, symbol, rhombusSection, true);  // Top
  addMiddleLine(height, oddColor, evenColor, symbol, rhombusSection);       // Middle
  generateHalf(height, oddColor, evenColor, symbol, rhombusSection, false); // Bottom
});

/**
 * Generate top or bottom half of the rhombus
 */
function generateHalf(height, oddColor, evenColor, symbol, container, isTop) {
  for (let i = 1; i <= height; i += 2) {
    const symbolCount = isTop ? i : height - i + 1;
    createLine(symbolCount, height, oddColor, evenColor, symbol, container);
  }
}

/**
 * Add the center line of the rhombus
 */
function addMiddleLine(height, oddColor, evenColor, symbol, container) {
  const line = document.createElement('div');
  let content = '';

  for (let i = 1; i <= height; i++) {
    const color = i % 2 === 0 ? evenColor : oddColor;
    content += `<span style="color:${color}">${symbol}</span>`;
  }

  line.innerHTML = content;
  container.appendChild(line);
}

/**
 * Create a single centered line of colored symbols
 */
function createLine(symbolCount, totalWidth, oddColor, evenColor, symbol, container) {
  const line = document.createElement('div');
  const padding = '&nbsp;'.repeat((totalWidth - symbolCount) / 2);
  let coloredSymbols = '';

  for (let i = 1; i <= symbolCount; i++) {
    const color = i % 2 === 0 ? evenColor : oddColor;
    coloredSymbols += `<span style="color:${color}">${symbol}</span>`;
  }

  line.innerHTML = padding + coloredSymbols + padding;
  container.appendChild(line);
}
