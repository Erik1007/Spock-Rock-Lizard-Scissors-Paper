// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let playerChoice;
let comChoice;
let pScore;
let cScore;

function compare(comChoice) {
  if (playerChoice === comChoice) {
    return "Bazzinga! The computer also chose " + comChoice + ":" + "It's a Draw!";
  } else if (playerChoice === "spock") {
    if (comChoice === "rock") {
      return "Spock vaporizes rock, you WIN!";
      pScore++;
    } else if (comChoice === "paper") {
      return "paer disproves Spock, you LOSE";
      cScore++;
    } else if (comChoice === "scissors") {
      return "Spock smashes scissors, you WIN!";
      pScore++;
    } else {
      return "lizzard poisens Spock, you LOSE";
      cScore++;
    }
  } else if (playerChoice === "Rock") {
    if (comChoice === "paper") {
      return "paper covers rock, you LOSE";
      cScore++;
    } else if (comChoice === "scissors") {
      return "rock crushes scissors, you WIN!";
      pScore++;
    } else if (comChoice === "lizzard") {
      return "rock crushes lizzard, you WIN!";
      pScore++;
    } else {
      return "Spock vaporizes rock, you LOSE";
      cScore++;
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      return "rock crushes lizzard, you LOSE";
      cScore++;
    } else if (comChoice === "paper") {
      return "lizzard eats paper, you WIN!";
      pScore++;
    } else if (comChoice === "scissors") {
      return "scissors decapitates lizzard, you LOSE!";
      cScore++;
    } else {
      return "lizzard poisons Spock, you WIN!";
      pScore++;
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      return "rock smashes scissors, you LOSE";
      cScore++;
    } else if (comChoice === "paper") {
      return "scissors cuts paper, you WIN!";
      pScore++;
    } else if (comChoice === " lizzard") {
      return " scissors decapitates lizzard, you WIN!";
      pScore++;
    } else {
      return "Spock smashes scissors, you LOSE";
      cScore++;
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      return "paper covers rock, you WIN!";
      pScore++;
    } else if (comChoice === "scissors") {
      return "scissors cuts paper, you LOSE";
      cScore++;
    } else if (comChoice === "lizzard") {
      return "lizzard eats paper, you LOSE";
      cScore++;
    } else {
      return "paper disproves Spock, you WIN!";
      pScore++;
    }
  }
};

function runGame() {
  button.addEventListener("DOMContentLoaded", function() {
  document.getElementsById();
		playerChoice = this.id;
		comChoice = Math.floor(Math.random() * 5);
     switch (comChoice) { 
       case 0: comChoice = "spock"; 
         break; 
       case 1: comChoice = "rock"; 
         break; 
       case 2: comChoice = "lizzard"; 
         break; 
       case 3: comChoice = "scissors";
         break;
       case 4: comChoice = "paper"; 
         break; 
     }
  })
};

function incrementScore() {
  document.getElementById("pScore").textContent = pScore;
  document.getElementById("cScore").textContent = cScore;
};


function winner() {
  if (pScore === 4 || cScore === 4) {
    let winner =
      pScore === 4 ?
      "You win the game! Congratulations!" :
      "Computer wins the game! Try again next time!";
    alert(winner);
    console.log("winner");
    return true;
  }
  return false;
};

reset.addEventListener("click", function () {

    document.getElementById("reset"); {
      pScore.innerHTML = "Player = 15";
      cScore.innerHTML = "Computer = 0";
    }
    console.log("reset");
  });






 