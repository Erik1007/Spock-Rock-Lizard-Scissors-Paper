// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let buttons = document.querySelectorAll('.options');
  for (let button of buttons) {
    button.addEventListener("click", function() {
      document.getElementsByClassName("option"); {
        if (this.getAttribute("option") === "submit") {
          checkAnswer();
          alert("buttong clicked");
        } 
        
      }
    }) 
  };

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
console.log(options);



  reset.addEventListener("click", function () {

    document.getElementById("reset"); {
      pScore.innerHTML = "Player = 15";
      cScore.innerHTML = "Computer = 0";
    }
    console.log("reset");
  });