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
  //Adding in only the attack method because only the player will have an option to retreat
  attack(attacked, attacker){
    console.log(`You attack the ${alienShip.name}!`)
    if(alienShip.hull > 0){
    console.log(`this is the index at 43:`, index)
    }

    //create random number for attack between 0 and 1
    let hitChance = Math.random();
    (hitChance).toFixed(1);

    //if hitChance is less than accuracy = miss
    if(hitChance < this.accuracy){
      console.log(`${attacker.name}'s attack misses!`)
    } else {
      let damage = attacker.firepower;
      console.log(`${attacked.name} takes a hit. Hull takes ${damage} damage.`);

      //if the damage is more or equal to the hull then alien ship is destroyed and a new one is made.
      if (damage >= attacked.hull){
        console.log(`this is the hull of the alien ship:`,attacked.hull)
        console.log(`${attacked.name}'s hull shatters.`)
        console.log("The fleet deploys a new ship to attack you!")
        //use the same alien ship object but change it's name
        //pop the previously defeated alien Ship
        console.log(`this is the index at 64:`, index)
        if(alienShipNames.length === 1){
          alienShipNames.pop();
        } else {
          alienShipNames.splice(index,index);
          console.log(`Updated array`,alienShipNames)
          console.log(`this is the index at 70:`, index)
        }
        alienShip.name = alienShipNames[getAlienName()]
        console.log(`this is the index:`, index)
        console.log(`${alienShip.name} approaches.`)
      }
    }
  }
}

//*------------------------------------------------------------------Generating the Ships

//I could also assign the player ship to have it's own unique name by storing the prompt value into a variable. Test's for strings.

//let playerName = prompt("jsjsjd", USS Schwarzenegger) blah blah blah

const ussSchwarzenegger = new Ship("USS Schwarzenegger", 20, 5, 0.7)

const alienShip = new Ship(alienShipNames[getAlienName()], alienHull, alienFP, alienACC) 

//I could create an array of alien ship objects that each have a unique name when made...

//adding the retreat to out player ship
ussSchwarzenegger.retreat = function (){
  console.log("I am retreating!")
  //verify if you want to retreat.
  //if yes => game over thanks for playing
  //if no => continue on with the game state. 
}

//player attack
while(alienShipNames.length > 0){
  ussSchwarzenegger.attack(alienShip, ussSchwarzenegger);
}

//Initializing values on game start and restart
// let ussSchwarzenegger.hull = 20
// let ussSchwarzenegger.firepower = 5
// let ussSchwarzenegger.accuracy = o.7


//Creating game play 
//maybe loop until names.length === 0

//Getting the game play to the DOM

//! NOTES
// ! Now what's happening is I get it actually do what I need expect, for when at the end. It's gunna give me an undefined alien. but because technically it works imma commit.