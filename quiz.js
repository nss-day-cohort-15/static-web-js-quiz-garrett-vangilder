document.getElementById('button').addEventListener('click',createCharacters);
// document.getElementById('myHeight').addEventListener('keypress',function (e) {
//     while (keyCode === 13) {
//       createCharacters();
//     }
// });
// document.getElementById('characterOfTree').addEventListener('keypress',function (e) {
//     while (keyCode === 13) {
//       createCharacters();
//     }
// });

var div = document.getElementById('placeForTree');
var obj = {}

function createCharacters () {
      console.log('createCharacters function has began')
      obj.height = Number(document.getElementById('myHeight').value);
      obj.character = document.getElementById('myCharacter').value;
      tree(obj);
    }

function tree(obj) {
  console.log("Tree Function is Running")

  addCounter = 1;
  spaceNumbers = obj.height;
    console.log('Loops are starting')
  if ( obj.height < 0)
    alert('You need to enter an amount above 0!');
  if (obj.height =="")
      alert("You left the enter field empty. Please enter in a height and character.");

  else if (obj.height > 0) {
  for (i = 0; i< obj.height; i ++) {
    line =' '.repeat(spaceNumbers) + obj.character.repeat(addCounter);
    spaceNumbers -=1
    addCounter += 2
    div.innerHTML += line + "<br>";
    console.log(line);
    }
  }
  }



