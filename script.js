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
  
  attack(attacked, attacker){
    alert(`You attack the ${alienShip.name}!`)

    //create random number for attack between 0 and 1
    let hitChance = Math.random();
    (hitChance).toFixed(1);

    //if hitChance is less than accuracy = miss
    if(hitChance < this.accuracy){
      alert(`${attacker.name}'s attack misses!`)
    } else {
      let damage = attacker.firepower;
      alert(`${attacked.name} takes a hit. Hull takes ${damage} damage.`);
      //if the damage is more or equal to the hull then alien ship is destroyed and a new one is made.
      if (damage >= attacked.hull){
        
        alert(`${attacked.name}'s hull shatters!`)
        alert("The fleet deploys a new ship to attack you!")
        alienShipNames.splice(index,index);
        console.log(`Updated array`,alienShipNames)
        console.log(`this is the index at 70:`, index)
 //*------------------------------------------------------------------Makes sense up to here     
        //if the index.name is equal to undefined break?
        if (alienShipNames[index] === undefined){
          console.log("end of game")
        } else { //else "create" a new alien ship with this new name. 
        alienShip = new Ship(alienShipNames[getAlienName()], alienHull, alienFP, alienACC) 
        console.log(`this is the index:`, index)
        console.log(`${alienShip.name} approaches.`)
        }
      }
    }
  }
}

//*------------------------------------------------------------------Generating the Ships

//I could also assign the player ship to have it's own unique name by storing the prompt value into a variable. Test's for strings.

//let playerName = prompt("jsjsjd", USS Schwarzenegger) blah blah blah

const ussSchwarzenegger = new Ship("USS Schwarzenegger", 20, 5, 0.7)

let alienShip = new Ship(alienShipNames[getAlienName()], alienHull, alienFP, alienACC) 

//I could create an array of alien ship objects that each have a unique name when made...

//player attack
while(alienShipNames.length > 0){
  ussSchwarzenegger.attack(alienShip, ussSchwarzenegger);
  console.log(alienShip)
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
//! It is not doing what i wanted. it's not generating different values for alien ship and that's cuz it's not creating a new computer.