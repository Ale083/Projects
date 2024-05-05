
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 400;
score = 0
ScoreHTML.innerHTML = score
fastModeHTML = document.getElementById("fastMode")
modif = 0

function scoreVel(){
  modif += 2
  console.log(modif)
  if (fastModeHTML.checked == true) {
    clearInterval(fastModeInterval)
    setInterval(main, 75 - modif)
  } else {
    clearInterval(Interval)
    setInterval(main, 125 - modif)
}
}
function circle(x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
function appleDraw(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function PlayablePos(min, max) {
  randnumb = (Math.floor(Math.random() * (max - min)) + min) * 25
  return randnumb
  //1-16/18
}

let apple = [PlayablePos(1, 18), PlayablePos(1, 16)]
let portal1 = [PlayablePos(2, 17), PlayablePos(2, 15)]
let portal2 = [PlayablePos(2, 17), PlayablePos(2, 15)]
let snake = [[100, 200], [75, 200], [50, 200], [25, 200]]

//direction along axis
let dX = 25
let dY = 0

//controls
window.onkeydown = (e) => {
  if (dY === 0) {
    if (e.code === 'KeyW' && (snake[0][1])-25 === snake[1][1] === false) {
      dX = 0;
      dY = -25;
    }
    if (e.code === 'KeyS' && (snake[0][1])+25 === snake[1][1] === false) {
      dX = 0;
      dY = 25;
    }
  }
  if (dX === 0) {
    if (e.code === 'KeyA' && (snake[0][0])-25 === snake[1][0] == false) {
      dX = -25;
      dY = 0;
    }
    if (e.code === 'KeyD' && (snake[0][0])+25 === snake[1][0] == false) {
      dX = 25;
      dY = 0;
    }
  }
}



function main() {
  //clear canvas
  ctx.clearRect(0, 0, 500, 500)
  //update segments
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i][0] = snake[i - 1][0]
    snake[i][1] = snake[i - 1][1]
  }
  //update head of the snake based on the values of dX and dY
  snake[0][0] += dX
  snake[0][1] += dY

  if (apple[0] === snake[0][0] && apple[1] === snake[0][1]) {
    //update apple x and y, score and add segment into the snake
    apple = [PlayablePos(1, 18), PlayablePos(1, 16)]
    score = score + 1
    ScoreHTML.innerHTML = score
    newSegmentX = snake.length - 1[0]
    newSegmentY = snake.length - 1[1]
    snake.push([newSegmentX, newSegmentY])
    
  }

  if (portal1[0] === portal2[0] && portal[1] === snake[0][1]) {
    portal2 = [PlayablePos(2, 17), PlayablePos(2, 15)]
  }

  if (portal1[0] === snake[0][0] && portal1[1] === snake[0][1]) {
    snake[0][0] = portal2[0]
    snake[0][1] = portal2[1]
    portal2 = [PlayablePos(2, 17), PlayablePos(2, 15)]
    portal1 = [PlayablePos(2, 17), PlayablePos(2, 15)]
  }
  else if (portal2[0] === snake[0][0] && portal2[1] === snake[0][1]) {
    snake[0][0] = portal1[0]
    snake[0][1] = portal1[1]
    portal2 = [PlayablePos(2, 17), PlayablePos(2, 15)]
    portal1 = [PlayablePos(2, 17), PlayablePos(2, 15)]
  }



  //draw the snake
  for (let i of snake) {
    //for each segment in snake, do this:
    circle(i[0], i[1], 15, '#90ee90')
  }
  //draw the apple
  circle(apple[0], apple[1], 12.5, 'red')

  //draw the portals
  circle(portal1[0], portal1[1], 10, "blue")
  circle(portal2[0], portal2[1], 10, "blue")
  //lose if you touch the border
  if (snake[0][0] === 0 || snake[0][0] === 450 || snake[0][1] === 0 || snake[0][1] === 400) {
    if (fastModeHTML.checked == true) {
      clearInterval(fastModeInterval)
    } else {
      clearInterval(Interval)
    }
    console.log("You lost, you touched the border")
    ctx.clearRect(0, 0, 500, 500)
  }
  //check if any part of the body is touching the head, if so you lose.
  for (let i = 2; i < snake.length; i++) {
    if (snake[i][0] === snake[0][0] && snake[i][1] === snake[0][1]) {
      if (fastModeHTML.checked == true) {
        clearInterval(fastModeInterval)
      } else {
        clearInterval(Interval)
      }
      console.log("You lost, you touched another one of your segments")
      ctx.clearRect(0, 0, 500, 500)
    }
  }
  if (apple[0] === snake[0][0] && apple[1] === snake[0][1]) {
  scoreVel()
  }
}
setTimeout(() => { Interval = setInterval(main, 125) }, 2000);
setTimeout(() => { instructions.style.display = 'none' }, 1500);
function fastMode() {
  if (fastModeHTML.checked == true) {
    clearInterval(Interval)
    fastModeInterval = setInterval(main, 75 - modif)
  } else {
    clearInterval(fastModeInterval)
    Interval = setInterval(main, 125 - modif)
  }

}

function refreshPage(){
  window.location.reload();
} 
//come up with a new feature to mix things up in snake
//make level progression

//record without portal: 35