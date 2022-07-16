// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

  const winrule = {
    Spock : ["Scissor", "Rock"],

    Rock : [ "Lizzard", "Scissor"], 

    Lizard : ["Spock", "Paper"], 

    Scissor : ["Paper", "Lizzard"], 

    Paper : ["Rock", "Spock"],
  };

  document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
});

  function runGame() {

  }

  function checkAnswer() {

  }

  function incrementPlayerScore() {

  }

  function incrementComputerScore() {

  }

  function reset() {

  }
