//*--------------------------Trying to get the stars

let gameDraw = {};
gameDraw.display = document.querySelector("canvas");
gameDraw.context = display.getContext("2d");
gameDraw.stars = [];

const alwaysDraw = () => {
  let i;
  let randomStars = (Math.random() * (10 - 2) + 2);
  let randomSpeed = (Math.random() * (4 - 1) + 1);
  

  //Creating the properties of the empty object as we need it
  gameDraw.context.clearRect(0, 0, gameDraw.display.width,gameDraw.display.height)
  //The above clears the screen. Erases the canvas for the start of each frame in an animation

  
  gameDraw.stars.push(createStars(starStart(), 1, randomStars, 0,1 + randomSpeed))
}

const createStars = (point, width, height, dx, dy) => {
  if (dx === undefined) {
    dx = 0;
  }
  if (dy === undefined) {
    dy = 0;
  }

}

//makes my point for createStar
const starStart = () => makePoint(Math.random() * gameDraw.display.width, 0)

//makes an object of which can by used by translatePoint
const makePoint = (x, y) => coordinates = {x:x, y:y};

//translate a point by making a new point
//this is why makePoint creates an object so that translatePoint accesses those values
const translatePoint = (point, dx, dy) => makePoint(point.x + dx, point.y + dy);