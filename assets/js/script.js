// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let playerChoice;
let comChoice;
let pScore = 0;
let cScore = 0;


// The function for the players choice buttons: 
const playerOptions = document.querySelectorAll('.btn');
playerOptions.forEach(btn => {
  btn.addEventListener("click", function (event) {
    playerChoice = event.target.id;
    setComChoice();
    document.getElementById("result_display").innerHTML = compare();
  });
});

// Some lines in the following code were directly inspired by/borrowed from: https://codepen.io/763004/pen/pPGGyP
// The logic statements for the comparrison of players choices, including calling the score increment function: 
function compare() {
  if (playerChoice === comChoice) {
    return "Bazzinga! The computer also chose " + comChoice + ":" + "It's a Draw!";
  } else if (playerChoice === "spock") {
    if (comChoice === "rock") {   
      incrementpScore();
      return "Spock vaporizes rock, you WIN!";
    } else if (comChoice === "paper") {
      incrementcScore();
      return "paer disproves Spock, you LOSE";
    } else if (comChoice === "scissors") {
      incrementpScore();
      return "Spock smashes scissors, you WIN!";   
    } else {
      incrementcScore();
      return "lizzard poisens Spock, you LOSE";
    }
  } else if (playerChoice === "rock") {
    if (comChoice === "paper") {
      incrementcScore();
      return "paper covers rock, you LOSE";
    } else if (comChoice === "scissors") {
      incrementpScore();
      return "rock crushes scissors, you WIN!";
    } else if (comChoice === "lizzard") {
      incrementpScore();
      return "rock crushes lizzard, you WIN!";
    } else {
      incrementcScore();
      return "Spock vaporizes rock, you LOSE";
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      incrementcScore();
      return "rock crushes lizzard, you LOSE";
    } else if (comChoice === "paper") {
      incrementpScore();
      return "lizzard eats paper, you WIN!";
    } else if (comChoice === "scissors") {
      incrementcScore();
      return "scissors decapitates lizzard, you LOSE";
    } else {
      incrementpScore();
      return "lizzard poisons Spock, you WIN!";
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      incrementcScore();
      return "rock smashes scissors, you <b>LOSE</b>";
    } else if (comChoice === "paper") {
      incrementpScore();
      return "scissors cuts paper, you WIN!";
    } else if (comChoice === " lizzard") {
      incrementpScore();
      return "scissors decapitates lizzard, you WIN!";
    } else {
      incrementcScore();
      return "Spock smashes scissors, you LOSE";
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      incrementpScore();
      return "paper covers rock, you WIN!";
    } else if (comChoice === "scissors") {
      incrementcScore();
      return "scissors cuts paper, you LOSE";
    } else if (comChoice === "lizzard") {
      incrementcScore();
      return "lizzard eats paper, you LOSE";
    } else {
      incrementpScore();
      return "paper disproves Spock, you WIN!"; 
    }
  }
 
}

// Some lines in the following code were directly inspired by/borrowed from: https://codepen.io/763004/pen/pPGGyP
//The random computer choice selection function:
function setComChoice() {
		switch (Math.floor(Math.random() * 5)) {
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
     console.log(playerChoice, comChoice);
  }

  compare();

  // The player choice vs random computer choice result display statement:
  // This code was inspired by the website:  https://codepen.io/763004/pen/pPGGyP
  function result () { 
  return "<p>Player: " + playerChoice + "<br>" +
    "Computer: " + comChoice + "</p>" + "<p>" + result + "</p>";
  }
 
  // The incremental player score function:
  // This code was inspired by the Code Institutes 'Love Maths'
function incrementpScore() {
    document.getElementById('pScore').innerText = ++pScore;
    victory();
}

// The incremental computer score function:
// This code was inspired by the Code Institutes 'Love Maths'
function incrementcScore() {
    document.getElementById('cScore').innerText = ++cScore; 
    victory();
}

// The reset function after a 'player' has won the series:
document.getElementById("resetScore").addEventListener("click", reset);
function reset() { 
  pScore = 0;
  cScore = 0;
  document.getElementById("pScore").textContent = pScore;
  document.getElementById("cScore").textContent = cScore;
}

// The victory threshold function to reset the game:
function victory() {
  if (pScore === 5) {
    alert("Congrats! You have bested Sheldon!");
    reset(); 
  }
  if (cScore === 5){
    alert("Bazinga! You lost to a superior being");
    reset(); 
  }
}

result();



 