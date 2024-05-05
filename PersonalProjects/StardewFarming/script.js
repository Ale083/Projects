const board = document.getElementById('board');
const counterHTML = document.getElementById('WateredNProtected')
const sprinklerCounterHTML = document.getElementById('sprinklerCounter')


const rows = 10;
const columns = 12;
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
      let hasFlag = cell.getAttribute("flag"); //check if attribute flag
      if (hasFlag === "true"){}else{ //if flag, do nothing, else check if mine
        e.currentTarget.style.background = 'white';
        placeScarecrow(e.currentTarget)
        updateCounter()
        
        }
      }
      cell.oncontextmenu = (e) => { //right click
        e.preventDefault();
        if (!cell.innerHTML.match(/[0-9]/)){ //if it doesn't have a number in it
        placeSprinkler(e.currentTarget)
        updateCounter()
          sprinklerCounter()
        } 
      }
      squares[r][c] = cell
      squares[r][c].setAttribute("grass", 'true');
      squares[r][c].setAttribute("scarecrow", 'false');
      squares[r][c].setAttribute("sprinkler", 'false');
      squares[r][c].setAttribute("watered", 'false');
      squares[r][c].setAttribute("protected", 'false');
    }
  }
  return squares
}

function placeSprinkler(square){
  let hasScarecrow = square.getAttribute("scarecrow");
  let hasSprinkler = square.getAttribute("sprinkler");
  let isGrass = square.getAttribute("grass");
  if (isGrass === 'false' && hasSprinkler === 'true' && hasScarecrow === 'false'){
    square.innerHTML = ""
    square.setAttribute("scarecrow", 'false');
    square.setAttribute("sprinkler", 'false');
    square.setAttribute("grass", 'true');
    square.style.background = "lightblue"

  }else if (isGrass === 'true' && hasSprinkler === 'false' && hasScarecrow === 'false'){
    square.innerHTML = "💧"
    square.setAttribute("scarecrow", 'false');
    square.setAttribute("grass", 'false');
    square.setAttribute("sprinkler", 'true');
    square.style.background = "white"
    targetWateredBlocks(square)
  }
  
}

function placeScarecrow(square){
  let hasScarecrow = square.getAttribute("scarecrow");
  let hasSprinkler = square.getAttribute("sprinkler");
  let isGrass = square.getAttribute("grass");
  if (isGrass === 'false' && hasSprinkler === 'false' && hasScarecrow === 'true'){
    square.innerHTML = ""
    square.setAttribute("scarecrow", 'false');
    square.setAttribute("sprinkler", 'false');
    square.setAttribute("grass", 'true');
    square.style.background = "lightblue"
    
  }else if (isGrass === 'true' && hasSprinkler === 'false' && hasScarecrow === 'false'){
    square.innerHTML = "👨🏼‍🌾"
    square.setAttribute("scarecrow", 'true');
    square.setAttribute("grass", 'false');
    square.setAttribute("sprinkler", 'false');
    square.style.background = "white"
    targetProtectedBlocks(square)
    
  }
  
}

function targetProtectedBlocks(square){
  currentTarget(square)
  for(let r = -8; r<9; r++){
    for(let c = -8; c<9; c++){
      
      if(r === 0 && c === 0){continue;}
      
      if((r===8 && c < -4) ||  (r===8 && c>4) || (r===-8 && c < -4) ||  (r===-8 && c>4)){continue;}
      else if((r===7 && c<-5) || (r===7 && c>5)|| (r===-7 && c < -5) ||  (r===-7 && c>5)){continue;}
      else if((r===6&& c<-6) || (r===6 && c>6)|| (r===-6 && c < -6) ||  (r===-6 && c>6)){continue;}
      else if((r===5 && c<-7) || (r===5 && c>7)|| (r===-5 && c < -7) ||  (r===-5 && c>7)){continue;}
      else if((row+r < 0 || row+r > rows-1 || column+c < 0 || column+c > columns-1)){continue;}
      else {
        protectColor(squares[row+r][column+c])
      }  
    }
  }
}

function targetWateredBlocks(square){
  currentTarget(square)
  for(let r=-1; r<2; r++){
    for(let c=-1;c<2;c++){
      if((r===0 && c===0)) {continue;}//|| (r===-1 && c===-1) || (r===-1 && c===1) || (r===1 && c===-1) || (r===1 && c===1)){continue;}
      else if((row+r < 0 || row+r > rows-1 || column+c < 0 || column+c > columns-1)){continue;}
      else{
        waterColor(squares[row+r][column+c])
      }
    }
  }
}

function waterColor(square){
  let isGrass = square.getAttribute("grass");
  let isProtected = square.getAttribute("protected");
  let isWatered = square.getAttribute("watered")
  if(isGrass === 'true' && isWatered ==='false' && isProtected === 'false'){ 
      square.setAttribute("watered", 'true')
      square.style.background = "#8095ff" // azul normal
  } else if(isGrass === 'true' && isWatered ==='true' && isProtected === 'false'){  
      square.style.background = "#5d78fc" // azul oscuro
  } else if(isGrass === 'true' && isWatered ==='false' && isProtected === 'true'){  
      square.setAttribute("watered", 'true')
      square.style.background = "#6EB8B9" // azul normal con verde
  } else if(isGrass === 'true' && isWatered ==='true' && isProtected === 'true'){  
      square.style.background = "#5DAAB8" // azul oscuro con verde
  }
}
//#5cdb73 verde
//#8095ff azul normal
//#5d78fc azul oscuro


function protectColor(square){
  let isGrass = square.getAttribute("grass");
  let isProtected = square.getAttribute("protected");
  let isWatered = square.getAttribute("watered")
  if(isGrass === 'true' && isWatered ==='false' && isProtected === 'false'){ 
      square.setAttribute("protected", 'true')
      square.style.background = "#5cdb73" // verde normal
  } else if(isGrass === 'true' && isWatered ==='false' && isProtected === 'true'){  
      square.style.background = "#3d944d" // verde oscuro
  } else if(isGrass === 'true' && isWatered ==='true' && isProtected === 'false'){  
      square.setAttribute("protected", 'true')
      square.style.background = "#6EB8B9" // verde normal con azul
  } else if(isGrass === 'true' && isWatered ==='true' && isProtected === 'true'){  
      square.style.background = "#5F95A6" // verde oscuro con azul
  }
  
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

function updateCounter(){
  counter = 0
  for (let r = 0; r < rows; r++){
    for(let c = 0; c < columns; c++){
      
      let isGrass = squares[r][c].getAttribute("grass");
      let isProtected = squares[r][c].getAttribute("protected");
      let isWatered = squares[r][c].getAttribute("watered")
      if(isGrass === 'true' && isWatered ==='true' && isProtected === 'true'){ 
        counter += 1
        
      }
    }
  }
  counterHTML.innerHTML = counter
}

function sprinklerCounter(){
  counter = 0
  for (let r = 0; r < rows; r++){
    for(let c = 0; c < columns; c++){
      let hasSprinkler = squares[r][c].getAttribute("sprinkler");
      if(hasSprinkler === 'true'){ 
        counter += 1
        }
      }
    }
    sprinklerCounterHTML.innerHTML = counter
  }
//DOM = Document Object Module
// on click
  // check if the square has a bomb
  // if not then place the number of mines around the square. if none are contacting then expand all neighboring squares that don't have any neighboring mines.