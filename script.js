//=======================
//====How



//* -------------------------------------------------------------Functions and variables

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

//index to hold alien Ship names
let index;

//next turn
let turnEnds;

let damage;

let remainingHull;

let alienShipNames = ["The Pisdim", "The Lorin", "The Noro", "The Cabilval", "The Talgis", "The Nusti"]

let getAlienName = () => index = Math.floor(Math.random()*alienShipNames.length);


//*---------------------------------------------------------------Ship object constructor

class Ship {
    constructor(name, hull, firepower, accuracy){ // might not need to feed these parameters
    this.name = name,
    this.hull = hull,
    this.firepower = firepower,
    this.accuracy = accuracy
  }
  
  attack(attacked, attacker){
    alert(`${attacker.name} attacks the ${attacked.name}!`)

    //create random number for attack between 0 and 1
    let hitChance = Math.random();
    (hitChance).toFixed(1);

    //if hitChance is less than accuracy = miss
    if(hitChance < this.accuracy){
      alert(`${attacker.name}'s attack misses!`)
      return turnEnds = true;
    } else { //otherwise on a hit
      damage = attacker.firepower;
      //if the damage is more or equal to the hull then alien ship is destroyed and a new one is made.
      if (damage >= attacked.hull){ 
        if(this.name === "USS Schwarzenegger"){
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage.`)
          alert(`${attacked.name}'s hull shatters!`)
          alert("The fleet deploys a new ship to attack you!")
          alienShipNames.splice(index,index); //removing the ship you just destroyed
          console.log(`Updated array`,alienShipNames)
          console.log(`this is the index at 70:`, index)
          alienShip = new Ship(alienShipNames[getAlienName()], alienHull, alienFP, alienACC) 
          alert(`${alienShip.name} approaches.`)
          return turnEnds = false;
        } else if (this.name === alienShipNames[index]){
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage. The ship's alarms begin to blare. The ship is going down! ${attacked.name} never makes it home. \nGame over.`)
          gameEnd();
        }
      } else {
        if(this.name === "USS Schwarzenegger"){
          remainingHull = attacked.hull - damage;
          attacked.hull = remainingHull;
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage. \nBut it's still standing. You see it's lasers warming up, it fires!`);
        } else if (this.name === alienShipNames[index]){
          remainingHull = attacked.hull - damage;
          attacked.hull = remainingHull;
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage. \nYou're hull is at ${attacked.hull}`)
        }
      }
    }
  }
}

//*------------------------------------------------------------------Generating the Ships

const ussSchwarzenegger = new Ship("USS Schwarzenegger", 20, 5, 0.7)

var alienShip = new Ship(alienShipNames[getAlienName()], alienHull, alienFP, alienACC) 

//*------------------------------------------------------------------Beginning the game

let answer;
let quit;
const gameStart = () => {
  alert("You are the USS Schwarzenegger. On your return flight back to Earth you're met with a barricade of alien ships. Defeat them to get home!")
  alert(`${alienShip.name} approaches.`)
  // answer = prompt(`${ussSchwarzenegger.hull}`);
  answer = prompt(`You're hull is at ${ussSchwarzenegger.hull}, and you still see ${alienShipNames.length} ships left. Do you [a]ttack or [r]etreat`);
  gameContinue();
}

const gameEnd = () =>{
  alert("Thank you for playing!");
  let startAgain = confirm("Play again?");
  if(startAgain === true){
    gameStart();
  }
}

const gameContinue = () => {
  while (answer === "a" || quit === null){
    ussSchwarzenegger.attack(alienShip, ussSchwarzenegger);//I should return if the player turn ends to then start the next attack'
    if (turnEnds === true){
      alienShip.attack(ussSchwarzenegger, alienShip);
    } else if (turnEnds === false ) {
      answer = prompt(`You're hull is at ${ussSchwarzenegger.hull}, and you still see ${alienShipNames.length} ships left. Do you [a]ttack or [r]etreat`);
    }
  } 
  if (answer === "r" || answer === undefined || answer === null) {
     quit = confirm(`Are you sure you want to retreat?`);
    if (quit === true){
      gameEnd();
    } else if (quit === null){
      gameContinue();
    }
  }
}

gameStart();









//!=========================================== NOTES ================================================
// ! Now what's happening is I get it actually do what I need expect, for when at the end. It's gunna give me an undefined alien. but because technically it works imma commit.
// ! It is not doing what i wanted. it's not generating different values for alien ship and that's cuz it's not creating a new class.
// ! Have to make conditionals for different alerts depending on who's attacking

//*======================================= CURRENT EDITION ==========================================
//*Committing because the general gist of the game works

//TODO After everything works turn if else's into ternarys...maybe

//?========================================= Completed =========================================
//Game start question and getting it to start the ship attack.

