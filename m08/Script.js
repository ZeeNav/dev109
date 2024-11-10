function addItem() {
  var newItem = document.getElementById('newItemInput').value;

  if (newItem.trim() !== "") {

    var newEl = document.createElement('li');
    newEl.className = 'hot';  

    var newText = document.createTextNode(newItem);
    newEl.appendChild(newText);

    var position = document.getElementById('todo');
    position.appendChild(newEl);

    document.getElementById('newItemInput').value = '';
  }
}

