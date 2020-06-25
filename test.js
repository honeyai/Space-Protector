//different way to stop this game: on retreat. on player death. on win
const gameToggle = () =>{
  while (alienShipNames.length > 0 || Ship.hull <= 0 || quit === true){
    //continue the game. call for gameStart();
  }
  //as soon as one of those things are false enter game over:
  //call for gameEnd();
}

// let whoseTurn = 


//all that this function is doing is starting the game
const gameStart = () => {
  alert("You are the USS Schwarzenegger. On your return flight back to Earth you're met with a barricade of alien ships. Defeat them to get home!")
  alert(`${alienShip.name} approaches.`)
 
}

const gameContinue = () => {
  let answer = prompt(`You're hull is at ${ship.hull}, and you still see ${alienShipNames.length} ships left. Do you [a]ttack or [r]etreat`);
  if (answer === "a"){
    ship.attack();//I should return if the player turn ends to then start the next attack
  } else if (answer === "r" || answer === undefined || answer === null) {
    let quit = prompt(`Are you sure you want to retreat?`);
    if (quit === true){
      gameEnd();
    } else {
      gameContinue();
    }
  }
}

