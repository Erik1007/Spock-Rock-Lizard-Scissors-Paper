// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let options = [{
    image: "lizard.webp",
    name: "Lizard",
  },
  {
    image: "paper.webp",
    name: "Paper",
  },
  {
    image: "rock.webp",
    name: "Rock",
  },
  {
    image: "scissor.webp",
    name: "Scissor",
  },
  {
    image: "spock.webp",
    name: "Spock",
  },
];


function runGame() {
  let pChoice = document.getElementsByClassName("options");
  let options = Array.from(document.getElementsByClassName("players"));

  options.forEach((option) => {
    option.addEventListener("click", function () {
      pChoice = this.textContent;
      console.log(pChoice)

      let cChoice = ["Spock", "Rock", "Lizzard", "Scissors", "Paper"];
      cChoice = options[Math.floor(Math.random() * 4) + 1];
      console.log(cChoice);
    });

  });
  document.getElementById('reset').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  })
runGame(checkAnswer);
};

function checkAnswer() {
  let currentMatch = (`${pChoice} vs ${cChoice}`);

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
    return true;
  }
  return false;
};

reset.addEventListener("click", function () {

  document.getElementById("reset"); {
    pScore.innerHTML = "Player = 0";
    cScore.innerHTML = "Computer = 0";
  }
});