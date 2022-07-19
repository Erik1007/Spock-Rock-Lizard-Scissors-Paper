// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  
  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("btn") === "data-type");
          runGame();
        })  
      }

runGame("checkAnswer");

function runGame() {
  let pChoice = document.getElementsByClassName('btn').value = "";
  

}



});
  let  = [{
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
console.log(options);



  reset.addEventListener("click", function () {

    document.getElementById("reset"); {
      pScore.innerHTML = "Player = 15";
      cScore.innerHTML = "Computer = 0";
    }
    console.log("reset");
  });