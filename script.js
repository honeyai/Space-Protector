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

const alienShip = new Ship(4, 4, 0.6) //hard coded for now

//checking if player ship us actually being made

console.log(ussSchwarzenegger)
console.log(alienShip)

//checking if they have access to method attak
ussSchwarzenegger.attack()
alienShip.attack()

//Initializing values on game start and restart
// let ussSchwarzenegger.hull = 20
// let ussSchwarzenegger.firepower = 5
// let ussSchwarzenegger.accuracy = o.7
//
// let alienShip.hull = randomly generated range between 3 and 6
// let alienShip.firepower = randomly generated range between 2 n 4
// let alienShip.accuracy = randomly generated range between .6 n .8





//! For the player ship
// retreat() {
  //verify if you want to retreat.
  //if yes => game over thanks for playing
  //if no => continue on with the game state. 
// }