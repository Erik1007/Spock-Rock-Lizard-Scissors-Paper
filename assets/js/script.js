// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

  const spockBtn = document.querySelector(".spock");
  console.log("spock");
  const rockBtn = document.querySelector(".rock");
  console.log("rock");
  const lizzardBtn = document.querySelector(".lizzard");
  console.log("lizzard");
  const scissorsBtn = document.querySelector(".scissors");
  console.log("scissors");
  const paperBtn = document.querySelector("paper");
  console.log("paper");

  function runGame() {
   button.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
      button.addEventListener("click", function() {
        pChoice.addEventListener("click", checkAnswer())
          });  
    };
  });  
  let pChoice = [spockBtn, rockBtn, lizzardBtn, scissorsBtn, paperBtn];
  let computerChoice = [".spock", ".rock", ".lizzard", ".scissors", ".paper"];

  pChoice.addEventListener("click", checkAnswer())

  computerChoice = Math.floor(Math.random() * 5);
  let cChoice = cChoice[computerChoice];

}

function checkAnswer() {
  // Draw check
  if (pChoice === cChoice) {
    alert(`${currentMatch} is a Draw`);
    return;
  }
  // Spock
  else if (pChoice === "Spock") {
    if (cChoice == "Scissors" || cChoice == "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
      console.log("Spock");
    } else if (cChoice == "Lizzard" || cChoice == "paper") {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  // Rock
  else if (pChoice === "Rock") {
    if (cChoice == "Lizzard" || cChoice == "Scissors") {
      alert(`${currentMatch} = You Win`);
      pScore++;
      console.log("Rock");
    } else if (cChoice == "Paper" || cChoice == "Spock") {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  // Lizzard
  else if (pChoice === "Lizzard") {
    if (cChoice == "Spock" || cChoice == "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
      console.log("Lizzard");
    } else if (cChoice == "Scissors" || cChoice == "Rock") {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  // Scissors
  else if (pChoice === "Scissors") {
    if (cChoice == "Paper" || cChoice == "Lizzard") {
      alert(`${currentMatch} = You Win`);
      pScore++;
      console.log("Scissors");
    } else if (cChoice == "Spock" || cChoice == "Rock") {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  // Paper
  else if (pChoice === "Paper") {
    if (cChoice == "Rock" || cChoice == "Spock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
      console.log("Paper");
    } else if (cChoice == "Lizzard" || cChoice == "Scissors") {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
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






 