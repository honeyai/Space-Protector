//creating a function that will create a random number for alien ship's properties that come from a range
const randomizer = (min, max) => {
  //if my min and max are less than zero don't floor or ceil just return as is
  if (min < 1 && max < 1) {
    return (Math.random() * (max - min) + min).toFixed(1);
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let alienHull = randomizer(3,6);
//randomly generated range between 3 and 6
let alienFP = randomizer(2,4)
//randomly generated range between 2 n 4
let alienACC = randomizer(0.6, 0.8)
//randomly generated range between .6 n .8


//*Ship object constructor

class Ship {
    constructor(hull, firepower, accuracy){ // might not need to feed these parameters
    this.hull = hull;
    this.firepower = firepower,
    this.accuracy = accuracy
  }
  //Adding in only the attack method because only the player will have an option to retreat
  attack(){
    console.log("I am attacking.")
  }
}

//*Generating the Ships

const ussSchwarzenegger = new Ship(20, 5, 0.7)

const alienShip = new Ship(alienHull, alienFP, alienACC) 

//adding the retreat to out player ship
ussSchwarzenegger.retreat = function (){
  console.log("I am retreating!")
  //verify if you want to retreat.
  //if yes => game over thanks for playing
  //if no => continue on with the game state. 
}

//calling retreat
ussSchwarzenegger.retreat()

//Initializing values on game start and restart
// let ussSchwarzenegger.hull = 20
// let ussSchwarzenegger.firepower = 5
// let ussSchwarzenegger.accuracy = o.7
