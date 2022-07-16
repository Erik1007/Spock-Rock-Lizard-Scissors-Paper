// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

  const winrule = {
    Spock : ["Scissor", "Rock"],

    Rock : [ "Lizzard", "Scissor"], 

    Lizard : ["Spock", "Paper"], 

    Scissor : ["Paper", "Lizzard"], 

    Paper : ["Rock", "Spock"],
  };

  function runGame() {
    let options = document.querySelectorAll(".pchoice");
    let pChoice = document.getElementsByTagName("button");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        let pInput = this.textContent;

        let cOptions = ["Spock", "Rock", "Lizzard","Scissors", "Paper"];
        let cInput = cOptions[Math.floor(Math.random() * length)];
      });
    });
  }

  function checkAnswer() {

  }

  function incrementPlayerScore() {

  }

  function incrementComputerScore() {

  }

  function reset() {

  }
