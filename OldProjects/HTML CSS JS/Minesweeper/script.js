const board = document.getElementById('board');

// get user's input to choose difficulty

const rows = 5;
const columns = 5;
const mines = 10;
const squares = createSquares();

function createSquares() {
  const squares = [];
  // add as many rows there are in rows v
  for (let r = 0; r < rows; r++) {
    const row = board.insertRow(r);  // <tr></tr>
    squares[r] = [];   
  // add as many cells there are in columns v
    for (let c = 0; c < columns; c++) {
      const cell = row.insertCell(c); //<td></td>
      cell.onclick = (e) => {
      let hasFlag = cell.getAttribute("flag");
      if (hasFlag === "true"){}else{
        e.currentTarget.style.background = 'white';
        checkMine(e.currentTarget)
        }
      }
      cell.oncontextmenu = (e) => {
        event.preventDefault();
        if (!cell.innerHTML.match(/[0-9]/)){
        placeFlag(e.currentTarget)
        } 
      }
      squares[r][c] = cell
    }
  }
  return squares
}



function setMines(){
  //based on the mines variable set mines across squares randomly
  for(let i = 0; i<mines; i++){
    a = Math.floor(Math.random() * (rows))
    b = Math.floor(Math.random() * (columns))
    if (squares[a][b].getAttribute("mine") === 'true'){
      i = i-1
    }else{
    squares[a][b].setAttribute("mine", 'true')
    }
  }
}
function checkMine(square){
  const isMine = square.getAttribute('mine');
  if(isMine === 'true'){
    alert("Game over")
    square.style.background = "red";
  } else{
    square.style.background = "white";
    minesAround(square)
  }
}
function minesAround(cell){
  // c = cell
  let numberMines = 0
  currentTarget(cell)
  for(let r = -1; r<2; r++){
    // r = row
    for(let c = -1; c<2; c++){
      if(r === 0 && c === 0){
        continue;
      }
      else if(row+r === -1 || row+r === rows || column+c ===-1 || column+c===columns){
        continue;
      }else{
        const isMine =squares[row+r][column+c].getAttribute('mine');
        if(isMine === 'true'){
          numberMines++
        }
      }
    }    
  }
  cell.innerHTML = numberMines
  /*
  if(numberMines === 0){
      for(let r = -1; r<2; r++){
    // r = row
    for(let c = -1; c<2; c++){
      if(r === 0 && c === 0){
        continue;
      }
      else if(row+r === -1 || row+r === rows || column+c ===-1 || column+c===columns){
        continue;
      }else if(squares[row+r][column+c].innerHTML == ""){
        minesAround(squares[row+r][column+c])
        }
      }
    }    
  }
  */
  }



function currentTarget(c){
  for (let i = 0; i<rows; i++){
    for(let b = 0; b<columns; b++){
      if (squares[i][b] == c){
        return row = i, column = b
      }
    }
  }
}

function placeFlag(square) {
  let hasFlag = square.getAttribute("flag");
  if (hasFlag === "true"){
    square.innerHTML = ""
    square.setAttribute("flag", 'false')
  }else{
    square.innerHTML = "⚑"
    square.setAttribute('flag', 'true')
    console.log(square)
  }
}
setMines()
console.log(squares)

//DOM = Document Object Module
// on click
  // check if the square has a bomb
  // if not then place the number of mines around the square. if none are contacting then expand all neighboring squares that don't have any neighboring mines.