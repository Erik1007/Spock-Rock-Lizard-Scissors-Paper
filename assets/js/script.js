// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let options = [
  {
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
    let pChoice = getElementById("options");
    let options = document.querySelectorAll(".options");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        pChoice = this.textContent;

        let cChoice = ["Spock", "Rock", "Lizzard", "Scissors", "Paper"];
        cChoice = options[Math.floor(Math.random() * 5)];
      });
    });
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
        if (cChoice === "Scissors", "Rock") {
          alert(`${currentMatch} = You Win`);
          pScore++;
        } else if (cChoice === "Lizzard", "paper") {
          alert(`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }
      // Rock
      else if (pChoice === "Rock") {
        if (cChoice === "Lizzard", "Scissors") {
          alert (`${currentMatch} = You Win`);
          pScore++;
        } else if (cChoice === "Paper", "Spock") {
          alert (`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }

      // Lizzard
      else if (pChoice === "Lizzard") {
        if (cChoice === "Spock", "Paper") {
          alert (`${currentMatch} = You Win`);
          pScore++;
        } else if (cChoice === "Scissors", "Rock") { 
          alert (`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }

      // Scissors
      else if (pChoice === "Scissors") {
        if (cChoice === "Paper", "Lizzard") {
          alert (`${currentMatch} = You Win`);
          pScore++;
        } else if (cChoice === "Spock", "Rock") {
          alert (`${currentMatch} = Computer Wins`);
          cScore++;
        }
      }

      // Paper
      else if (pChoice === "Paper") {
        if (cChoice === "Rock", "Spock") {
          alert(`${currentMatch} = You Win`);
          pScore++;
        } else if (cChoice === "Lizzard", "Scissors") {
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
        pScore === 4
          ? "You win the game! Congratulations!"
          : "Computer wins the game! Try again next time!";
      alert(winner);
      return true;
    }
    return false;
  };

    reset.addEventListener("click", function () {    
      document.getElementById("reset"); {
        pScore.innerHTML = "0";
        cScore.innerHTML = "0";
      }
  });
