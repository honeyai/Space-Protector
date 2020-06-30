
let gameDraw = {};


const runOnLoad = () => {
  //CANVAS
  gameDraw.display = document.querySelector("#canvas");
  gameDraw.context = gameDraw.display.getContext("2d");
  
  //DRAWING stars
  gameDraw.stars  = [];

  //TURN ON GAME & CREATE ARRAY OBJECTS, COLLISION DETECTION ETC.
  alwaysDraw();
}

function createStars(point, width, height, dx, dy){
  if (dx === undefined) {
    dx = 0;
  }
  if (dy === undefined) {
    dy = 0;
  }
  var stardj = {
    corner: point,
    width: width,
    height: height,
    dx: dx,
    dy: dy,
    move() {
      this.corner = translatePoint(this.corner, this.dx, this.dy);
    },
    starDraw() {
      gameDraw.context.beginPath();
      gameDraw.context.rect(this.corner.x, this.corner.y, this.width, this.height);
      gameDraw.context.strokeStyle = "#E8E4F0";
      gameDraw.context.stroke();
    }
  };
  return stardj;
}

function alwaysDraw() {
  let rndStarNum = (Math.random() * (5 - 2) + 0.5);
  let randomSpeed = (Math.random() * (4 - 1) + 1);
  gameDraw.context.clearRect(0, 0, gameDraw.display.width, gameDraw.display.height);
  gameDraw.stars.push(createStars(starStart(), 0.01, rndStarNum, 0, 1 + randomSpeed));
  for (i in gameDraw.stars) {
    gameDraw.stars[i].starDraw();
    gameDraw.stars[i].move();
  }
  //so that it's drawing it in every 20 milliseconds wile the game state is false
  setTimeout(alwaysDraw, 20);
}


function makePoint(x, y) {
  var obj = {x:x, y:y};
  return obj;
}

function translatePoint(point, dx, dy) {
  return makePoint(point.x + dx, point.y + dy);
}

function starStart() {
  return makePoint(Math.random() * gameDraw.display.width, 0);
}