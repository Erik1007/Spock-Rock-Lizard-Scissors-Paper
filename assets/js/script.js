// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let playerChoice;
let comChoice;
let pScore = 0;
let cScore = 0;

const playerOptions = document.querySelectorAll('.btn');
playerOptions.forEach(btn => {
  btn.addEventListener("click", function (event) {
    playerChoice = event.target.id;
    setComChoice();
    document.getElementById("result_display").innerHTML = compare();
  });
})

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
     console.log('see', comChoice);
  }

  compare();

  function result () { 
  return "<p>Player: " + playerChoice + "<br>" +
    "Computer: " + comChoice + "</p>" + "<p>" + result + "</p>";
  }
 
function incrementpScore() {
    document.getElementById('pScore').innerText = ++pScore;
}

function incrementcScore() {
    document.getElementById('cScore').innerText = ++cScore;
}

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
}

 function reset() {
  btn.addEventListener("click");
  document.getElementById('pScore').innerHTML = "0";
  document.getElementById('cScore').innerHTML = "0";
    console.log("reset");
    pScore= 0;
    cScore = 0;
  }


result();
winner();


 