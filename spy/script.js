const items = ['mug', 'notebook', 'clock', 'glasses', 'pencil'];
const found = new Set();

function foundItem(name) {
  if (!found.has(name)) {
    found.add(name);
    document.getElementById(name).classList.add('found');
  }
  if (found.size === items.length) {
    setTimeout(() => {
      if (confirm('🎉 You found all items! Want to play again?')) {
        location.reload();
      }
    }, 200);
  }
}

items.forEach(name => {
  document.getElementById(area-${name}).addEventListener('click', () => foundItem(name));
});
