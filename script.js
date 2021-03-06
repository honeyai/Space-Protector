//========================================================================================
//================================ SPACE BATTLE ==========================================
//========================================================================================

//
// ─── TABLE OF CONTENTS ──────────────────────────────────────────────────────────
//
    // GLOBAL VARIABLES AND FUNCTIONS ARE AT THE TOP OF EACH OF THEIR RESPECTIVE SECTIONS

// 1. Functions 
// 2. Ship Constructor Global Variables
// 2. Ship object constructor
// 3. Generating the Ships
// 4. Beginning the game

//* -------------------------------------------------------------Functions
//Creates a random number for alien ship's properties that need a range
  //Returns a 0.n decimal if the range is between 0 and 1
  //Returns a floored integer if the range is beyond 0 and 1
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

//* -------------------------------------------------------------Ship Constructor Global Variables

//randomly generated range between 3 and 6
let alienHull = randomizer(3,6);
//randomly generated range between 2 n 4
let alienFP = randomizer(2,4)
//randomly generated range between .6 n .8
let alienACC = randomizer(0.6, 0.8)

//index to hold alien ship names
let index;

//next turn boolean. true for the alien ship to attack. false when the the round needs to ask if the player want's to still attack or retreat. Basically only when the alien ship is destroyed. Relevant lines: 176 and 178
let turnEnds;
//variable to hold the attacker's firepower
let damage;
//variable to hold the difference between the attacked's hull and attacker's firepower
let remainingHull;
//array used to restore the items of array alienShipNames at game restart
let deletedNames = ["The Pisdim", "The Lorin", "The Noro", "The Cabilval", "The Talgis", "The Nusti"];
//used to create unique alien names
let alienShipNames = ["The Pisdim", "The Lorin", "The Noro", "The Cabilval", "The Talgis", "The Nusti"];
//randomize the index of array alienShipName
let getAlienName = () => index = Math.floor(Math.random()*alienShipNames.length);

//*---------------------------------------------------------------Ship object constructor

  //One constructor for the player and the computer
  //Has a method called attack.
    //Branching overview of attack()
      //Attack() takes two parameters and is called inside gameContinue()
        //- At the start of attack() the probability to hit is calculated for the attacker
          //- that number is fixed to one decimal place
      //1. IF THAT HIT CHANCE IS LESS THAN THE ATTACKERS ACCURACY
            // They miss. Turn ends.
      //2. IF THEY DON'T MISS DAMAGE IS HOLDING ONTO THE VALUE OF THE ATTACKER'S FIREPOWER
            //2A. IF DAMAGE IS MORE THAN OR EQUAL TO THE ATTACKED'S HULL || IF NOT GO TO 2B.
                //Check's who's the actor this turns in order to give the right flavor text for their turn.
                  //2A-1 PLAYER SHIPS' TURN
                    //Resolves the current turn. Alien ship has died.
                    //That ships' name is taken out of the running
                    //2A-1a IF THERE ARE NO MORE ALIENS LEFT
                        //End of Game play
                    //2A-1b IF THERE ARE STILL MORE ALIENS LEFT
                        //Construct a new alien ship
                        //ask the played if they want to attack or retreat
                  //2A-2 ALIEN'S TURN
                    //Resolves the current turn. Player has died.
                    //End of Game play
                //! I might not need this line: After 2A-1 and 2A-2 are accessed, ask the player if they want to continue.
            //2B. IF IT DOESN'T EXCEED THE TOTAL HULL
                //Check who's the actor for the right flavor text.
                  //?Then calculate the damage done to the attacked
                  // 2B-1 = player text
                    //alien's time to attack
                  // 2B-2 = alien text
                    //player's time to attack

class Ship {
    constructor(name, hull, firepower, accuracy){ 
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

    if(hitChance < this.accuracy){                                                        //*==========================1.
      alert(`${attacker.name}'s attack misses!`)
      return turnEnds = true;
    } else {                                                                              //*==========================2.
      damage = attacker.firepower;
      //if the damage is more or equal to the hull then alien ship is destroyed and a new one is made.
      if (damage >= attacked.hull){                                                       //*=========================2A.
        if(this.name === "USS Schwarzenegger"){                                           //*=======================2A-1.
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage.`)
          alert(`${attacked.name}'s hull shatters!`)
          
          alienShipNames.splice(index,1); //removing the ship you just destroyed
          
          //once the length is less thana or equal to 0 stop generating ships
          if(alienShipNames.length <=0){                                                  //*======================2A-1a.
            alert(`As ${attacked.name}'s hull is set ablaze, you speed through the wreckage. The alien fleet as been defeat!\nYou're heading home...`)
            gameEnd();
          } else {                                                                        //*======================2A-1b.
            alert("The fleet deploys a new ship to attack you!")
            alienShip = new Ship(alienShipNames[getAlienName()], randomizer(3,6), randomizer(2,4), randomizer(0.6,0.8)) 
            // console.log(alienShip)
            alert(`${alienShip.name} approaches.`)
            turnEnds = false;
          }
        } else if (this.name === alienShipNames[index]){
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage. \nThe ship's alarms begin to blare. The ship is going down! ${attacked.name} never makes it home. \nGame over.`)
          gameEnd();
        }
        turnEnds = false;
      } else {                                                                              //*=======================2-B.
        if(this.name === "USS Schwarzenegger"){                                             //*======================2B-1.
          remainingHull = attacked.hull - damage;
          attacked.hull = remainingHull;
          alert(`${attacked.name} takes a hit, hull takes ${damage} damage. \nBut it's still standing. You see it's lasers warming up, it fires!`);
          turnEnds = true; 
        } else if (this.name === alienShipNames[index]){                                    //*======================2B-2.
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

  //List of functions:
    //- gameStart()
      //Intros the game. 
      //calls for gameContinue()

    //- gameContinue()
      //asks if player wants to continue
        //call ifContinue() to get an acceptable valuable
      //controls when and who uses the attack method 
    

    //- ifContinue()
      //makes sure that the answer is a valid answer.

    //- gameEnd()
      //Thanks player for playing
      //Will ask if you want to play again
      // yes: repopulate the alienShipNames with the untouched names array and go to gameStart()
      //! no: do nothing... doesn't really work atm

//Holds value of prompts
let answer;
//Holds value of confirm
let quit;

const gameStart = () => {
  console.log("game begins");
  alert("You are the USS Schwarzenegger. On your return flight back to Earth, you're met with a barricade of alien ships. \nDefeat them to get home!");
  alert(`${alienShip.name} approaches.`);
  gameContinue();
}

const gameEnd = () =>{
  console.log("game is ending");
  alert("Thank you for playing!");
  let startAgain = confirm("Play again?");
  if(startAgain === true){
    console.log("game is restarting");
    alienShipNames = deletedNames;
    console.log("this should be at 6", alienShipNames.length);
    ussSchwarzenegger.hull = 20;
    gameStart();
  }else if (startAgain === false) {
    console.log("game fully ends");
    return;
  }
}

const ifContinue = () =>{
  console.log("asking for continue.");
  answer = prompt(`You're hull is at ${ussSchwarzenegger.hull}, and you still see ${alienShipNames.length} ships left. Do you [a]ttack or [r]etreat`);
  let noNumbers = /^[0-9]+$/;
  while (answer !== "a" && answer !== "attack" && answer !== "r" && answer !== "retreat"){
    console.log("answer was invalid")
    alert("That is not a valid answer.")
    answer = prompt(`You're hull is at ${ussSchwarzenegger.hull}, and you still see ${alienShipNames.length} ships left. Do you [a]ttack or [r]etreat`);
  }
  console.log(answer);
  return answer
}

const gameContinue = () => {
  ifContinue();
  while (answer === "a" || quit === false || answer === "attack"){
    console.log("player is attacking");
    ussSchwarzenegger.attack(alienShip, ussSchwarzenegger);
    if (turnEnds === true){
      console.log("alien attacks");
      alienShip.attack(ussSchwarzenegger, alienShip);
    } else if (turnEnds === false) {
      console.log("alien died, ask for player action");
      ifContinue();
    }
  if (answer === "r" || answer === null || answer === "retreat") {
    console.log("player is retreating");
    quit = confirm(`Are you sure you want to retreat?`);
    if (quit === true){
      alert("The alien fleet looms before you. Accessing the damage done to your hull, you know the USS Schwarzenegger isn't going to make it at this rate.\nBefore the fleet can finish you off, you retreat back into space to find a new way to return back to Earth...")
      gameEnd();
      } else if (quit === false){
        console.log("player is continuing");
        gameContinue();
      }
    }
  }
}




setTimeout(gameStart, 2000);









//!=========================================== NOTES ================================================
//!Current errors: playing again after you win does not start with all of the array it starts with the only remaining item of the array.

//*======================================= CURRENT EDITION ==========================================
//*Committing because the general gist of the game works


//TODO After everything works turn if else's into ternarys...maybe
//TODO Fix play again>> merge the deletedNames with names. fix mid game retreat

//?========================================= Completed =========================================
//Game start question and getting it to start the ship attack.

