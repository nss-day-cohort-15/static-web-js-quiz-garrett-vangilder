

document.getElementById('button').addEventListener('click',tree);
var div = document.getElementById('placeForTree');

function tree(height) {
  height = document.getElementById('myHeight').value;
  character = document.getElementById('myCharacter').value;
  addCounter = 1;
  spaceNumbers = height

  for (i = 0; i< height; i ++) {
    line =' '.repeat(spaceNumbers) + character.repeat(addCounter);
    spaceNumbers -=1
    addCounter += 2
    div.innerHTML += line + "<br>";

    }

  }

