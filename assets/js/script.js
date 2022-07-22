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
      pScore++;
      return "Spock vaporizes rock, you WIN!";
    } else if (comChoice === "paper") {
      cScore++;
      return "paer disproves Spock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      return "Spock smashes scissors, you WIN!";   
    } else {
      cScore++;
      return "lizzard poisens Spock, you LOSE";
    }
  } else if (playerChoice === "Rock") {
    if (comChoice === "paper") {
      cScore++;
      return "paper covers rock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      return "rock crushes scissors, you WIN!";
    } else if (comChoice === "lizzard") {
      pScore++;
      return "rock crushes lizzard, you WIN!";
    } else {
      cScore++;
      return "Spock vaporizes rock, you LOSE";
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      cScore++;
      return "rock crushes lizzard, you LOSE";
    } else if (comChoice === "paper") {
      pScore++;
      return "lizzard eats paper, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      return "scissors decapitates lizzard, you LOSE!";
    } else {
      pScore++;
      return "lizzard poisons Spock, you WIN!";
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      cScore++;
      return "rock smashes scissors, you LOSE";
    } else if (comChoice === "paper") {
      pScore++;
      return "scissors cuts paper, you WIN!";
    } else if (comChoice === " lizzard") {
      pScore++;
      return " scissors decapitates lizzard, you WIN!";
    } else {
      cScore++;
      return "Spock smashes scissors, you LOSE";
      
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      pScore++;
      return "paper covers rock, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      return "scissors cuts paper, you LOSE";
    } else if (comChoice === "lizzard") {
      cScore++;
      return "lizzard eats paper, you LOSE";
    } else {
      pScore++;
      return "paper disproves Spock, you WIN!";
      
    }
  }
};

function runGame() {
  button.addEventListener("DOMContentLoaded", function() {
  document.getElementsById("");
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
      pScore.innerHTML = "Player = 0";
      cScore.innerHTML = "Computer = 0";
    }
    console.log("reset");
  });






 