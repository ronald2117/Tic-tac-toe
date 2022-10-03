var clickCount = 1;
var xo;
var isWin = false;
var player = 'O';
var nextPlayer = 'X';

const Button = (id, pos) => {
  var isClicked = false;
  const displayXO = () => {
    if (isClicked == false && isWin == false) {
      //On click display X and O alternately
      if (clickCount % 2 == 0) {
        xo = "O"
        player = 'O'
        clickCount++
        mainArr[pos] = xo;
        console.log("Next Turn: X");
        ifs();
        nextTurn("X");
      } else {
        xo = 'X';
        player = 'X';
        clickCount++;
        mainArr[pos] = xo;
        console.log("Next Turn: O");
        ifs();
        nextTurn("O");
      }
      document.getElementById(id).innerHTML = xo;
      isClicked = true;
    }
  }
  return {displayXO, id, isClicked}
}

const btn1 = Button('cell1', 0);
const btn2 = Button('cell2', 1);
const btn3 = Button('cell3', 2);
const btn4 = Button('cell4', 3);
const btn5 = Button('cell5', 4);
const btn6 = Button('cell6', 5);
const btn7 = Button('cell7', 6);
const btn8 = Button('cell8', 7);
const btn9 = Button('cell9', 8);

var mainArr = ['','','','','','','','',''];

const straight = (first, second, third) => {
    return mainArr[first] + mainArr[second] + mainArr[third]  == 'XXX' || mainArr[first] + mainArr[second] + mainArr[third]  == 'OOO';
  }

const ifs = () => {
  //Top Horizontal
  if (straight(0, 1, 2)) {
  isWin = true
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //Middle Horizontal
 else if (straight(3, 4 ,5)) {
  isWin = true
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //Bottom Horizontal
 else if (straight(6, 7, 8)) {
  isWin = true;
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //Left vertical
 else if (straight(0, 3, 6)) {
  isWin = true;
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //middle vertical
 else if (straight(1, 4, 7)) {
  isWin = true;
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //Right vertical
 else if (straight(2, 5, 8)) {
  isWin = true;
  console.log(`Player ${player} Win!`);
  whoWin()
 }
 //Forward Diagonal
 else if (straight(2, 4, 6)) {
  isWin = true;
  console.log(`Win: ${isWin}`);
  whoWin()
 }
 //Backward Diagonal
 else if (straight(0, 4, 8)) {
  isWin = true;
  console.log(`Win: ${isWin}`);
  whoWin()
 }
 else {
  console.log('Turns')
 }
}

function whoWin() {
  if(isWin) {
    document.querySelector('#status').innerHTML = `Player ${player} Wins!`;
  }
}

function nextTurn(next) {
  if(!isWin) {
    document.getElementById('next-turn').innerHTML = next;
  }
}
  