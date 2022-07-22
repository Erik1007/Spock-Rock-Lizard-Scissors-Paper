// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let playerChoice;
let comChoice;
let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');

const playerOptions = document.querySelectorAll('.btn');
playerOptions.forEach(btn => {
  btn.addEventListener("click", function (event) {
    playerChoice = event.target.id;
    setComChoice();
    console.log("output of compare", compare());
  });
});

function compare(comChoice) {
  if (playerChoice === comChoice) {
    return "Bazzinga! The computer also chose " + comChoice + ":" + "It's a Draw!";
  } else if (playerChoice === "spock") {
    if (comChoice === "rock") {
      pScore++;
      return "Spock vaporizes rock, you WIN!";
    } else if (comChoice === "paper") {
      cScore++;
      return "paer disproves Spock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      return "Spock smashes scissors, you WIN!";   
    } else {
      cScore++;
      return "lizzard poisens Spock, you LOSE";
    }
  } else if (playerChoice === "rock") {
    if (comChoice === "paper") {
      cScore++;
      return "paper covers rock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      return "rock crushes scissors, you WIN!";
    } else if (comChoice === "lizzard") {
      pScore++;
      return "rock crushes lizzard, you WIN!";
    } else {
      cScore++;
      return "Spock vaporizes rock, you LOSE";
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      cScore++;
      return "rock crushes lizzard, you LOSE";
    } else if (comChoice === "paper") {
      pScore++;
      return "lizzard eats paper, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      return "scissors decapitates lizzard, you LOSE!";
    } else {
      pScore++;
      return "lizzard poisons Spock, you WIN!";
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      cScore++;
      return "rock smashes scissors, you LOSE";
    } else if (comChoice === "paper") {
      pScore++;
      return "scissors cuts paper, you WIN!";
    } else if (comChoice === " lizzard") {
      pScore++;
      return " scissors decapitates lizzard, you WIN!";
    } else {
      cScore++;
      return "Spock smashes scissors, you LOSE";
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      pScore++;
      return "paper covers rock, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      return "scissors cuts paper, you LOSE";
    } else if (comChoice === "lizzard") {
      cScore++;
      return "lizzard eats paper, you LOSE";
    } else {
      pScore++;
      return "paper disproves Spock, you WIN!"; 
    }
  }
};

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
  };

  function result() {  
    compare(comChoice).innerText = 'result';
  return "<p>User: " + playerChoice + "<br>" +
    "Computer: " + comChoice + "</p>" + "<p>" + result + "</p>";
  };
  result();

function incrementpScore() {
    let oldScore = parseInt(document.getElementById('pScore').innerText);
    document.getElementById('pScore').innerText = ++oldScore;
}
incrementpScore();

function incrementcScore() {
  let oldScore = parseInt(document.getElementById('cScore').innerText);
    document.getElementById('pScore').innerText = ++oldScore;
};
incrementcScore();


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

const resetBtn = document.getElementById("reset");
reset.addEventListener("click", function () {

    document.getElementById("reset"); {
      pScore.innerHTML = "15";
      cScore.innerHTML = "0";
    }
    console.log("reset");
  });






 