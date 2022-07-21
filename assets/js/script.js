// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let playerChoice;
let comChoice;

function compare(comChoice) {
  if (playerChoice === comChoice) {
    return "Bazzinga! The computer also chose " + comChoice + ":" + "It's a Draw!";
  } else if (playerChoice === "spock") {
    if (comChoice === "rock") {
      return "Spock vaporizes rock, you WIN!";
    } else if (comChoice === "paper") {
      return "paer disproves Spock, you LOSE";
    } else if (comChoice === "scissors") {
      return "Spock smashes scissors, you WIN!"
    } else {
      return "lizzard poisens Spock, you LOSE";
    }
  } else if (playerChoice === "Rock") {
    if (comChoice === "paper") {
      return "paper covers rock, you LOSE";
    } else if (comChoice === "scissors") {
      return "rock crushes scissors, you WIN!";
    } else if (comChoice === "lizzard") {
      return "rock crushes lizzard, you WIN!";
    } else {
      return "Spock vaporizes rock, you LOSE";
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      return "rock crushes lizzard, you LOSE";
    } else if (comChoice === "paper") {
      return "lizzard eats paper, you WIN!";
    } else if (comChoice === "scissors") {
      return "scissors decapitates lizzard, you LOSE!";
    } else {
      return "lizzard poisons Spock, you WIN!";
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      return "rock smashes scissors, you LOSE";
    } else if (comChoice === "paper") {
      return "scissors cuts paper, you WIN!";
    } else if (comChoice === " lizzard") {
      return " scissors decapitates lizzard, you WIN!"
    } else {
      return "Spock smashes scissors, you LOSE";
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      return "paper covers rock, you WIN!";
    } else if (comChoice === "scissors") {
      return "scissors cuts paper, you LOSE";
    } else if (comChoice === "lizzard") {
      return "lizzard eats paper, you LOSE";
    } else {
      return "paper disproves Spock, you WIN!"
    }
  }
};


reset.addEventListener("click", function () {

    document.getElementById("reset"); {
      pScore.innerHTML = "Player = 15";
      cScore.innerHTML = "Computer = 0";
    }
    console.log("reset");
  });






 