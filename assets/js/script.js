// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

  let pchoice, ccoice = ["Spock", "Rock", "Lizzard", "Scissors", "Paper"];

  let winner = [
    (0 > 3),
    (0 > 1),
    (1 > 2),
    (1 > 3),
    (2 > 0),
    (2 > 4), 
    (3 > 4),
    (3 > 2), 
    (4 > 1),
    [4 > 0],
  ];

  const winrule = {
    Spock : ["Scissor", "Rock"],

    Rock : [ "Lizzard", "Scissor"], 

    Lizard : ["Spock", "Paper"], 

    Scissor : ["Paper", "Lizzard"], 

    Paper : ["Rock", "Spock"],
  };

  function runGame() {
    let options = document.querySelectorAll(".pChoice");
    let pChoice = document.getElementsByClassName("button");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        let pChoice = this.textContent;

        let cOptions = ["Spock", "Rock", "Lizzard","Scissors", "Paper"];
        let cChoice = cOptions[Math.floor(Math.random() * 5)];
      });
    });
  }

  function checkAnswer() {
    function compareInputs(pChoice, cChoice) {
      let currentMatch = (`${pChoice} vs ${cChoice}`);
    }

      // Tie check
      if (pChoice === cChoice) {
        alert(`${currentMatch} is a Draw`);
        return;
      }
    
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
  }
  

  function incrementPlayerScore() {

  }

  function incrementComputerScore() {

  }

  function reset() {

  }
