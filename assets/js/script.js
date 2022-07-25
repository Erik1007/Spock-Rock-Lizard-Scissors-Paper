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
    console.log("output of compare", compare());
    document.getElementById("result_display").innerHTML = compare();
  });
})

function compare(comChoice) {
  if (playerChoice === comChoice) {
    return "Bazzinga! The computer also chose " + comChoice + ":" + "It's a Draw!";
  } else if (playerChoice === "spock") {
    if (comChoice === "rock") {
      pScore++;
      incrementpScore();
      return "Spock vaporizes rock, you WIN!";
    } else if (comChoice === "paper") {
      cScore++;
      incrementcScore();
      return "paer disproves Spock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      incrementpScore();
      return "Spock smashes scissors, you WIN!";   
    } else {
      cScore++;
      incrementcScore();
      return "lizzard poisens Spock, you LOSE";
    }
  } else if (playerChoice === "rock") {
    if (comChoice === "paper") {
      cScore++;
      incrementcScore();
      return "paper covers rock, you LOSE";
    } else if (comChoice === "scissors") {
      pScore++;
      incrementpScore();
      return "rock crushes scissors, you WIN!";
    } else if (comChoice === "lizzard") {
      pScore++;
      incrementpScore();
      return "rock crushes lizzard, you WIN!";
    } else {
      cScore++;
      incrementcScore();
      return "Spock vaporizes rock, you LOSE";
    }
  } else if (playerChoice === "lizzard") {
    if (comChoice === "rock") {
      cScore++;
      incrementcScore();
      return "rock crushes lizzard, you LOSE";
    } else if (comChoice === "paper") {
      pScore++;
      incrementpScore();
      return "lizzard eats paper, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      incrementcScore();
      return "scissors decapitates lizzard, you LOSE";
    } else {
      pScore++;
      incrementpScore();
      return "lizzard poisons Spock, you WIN!";
    }
  } else if (playerChoice === "scissors") {
    if (comChoice === "rock") {
      cScore++;
      incrementcScore();
      return "rock smashes scissors, you <b>LOSE</b>";
    } else if (comChoice === "paper") {
      pScore++;
      incrementpScore();
      return "scissors cuts paper, you WIN!";
    } else if (comChoice === " lizzard") {
      pScore++;
      incrementpScore();
      return "scissors decapitates lizzard, you WIN!";
    } else {
      cScore++;
      incrementcScore();
      return "Spock smashes scissors, you LOSE";
    }
  } else if (playerChoice === "paper") {
    if (comChoice === "rock") {
      pScore++;
      incrementpScore();
      return "paper covers rock, you WIN!";
    } else if (comChoice === "scissors") {
      cScore++;
      incrementcScore();
      return "scissors cuts paper, you LOSE";
    } else if (comChoice === "lizzard") {
      cScore++;
      incrementcScore();
      return "lizzard eats paper, you LOSE";
    } else {
      pScore++;
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
  }

  compare();

  function result (compare, comChoice) { 
  return "<p>Player: " + playerChoice + "<br>" +
    "Computer: " + comChoice + "</p>" + "<p>" + result + "</p>";
  }
 
function incrementpScore() {
    let oldScore = pScore;
    document.getElementById('pScore').innerText = ++oldScore;
}

function incrementcScore() {
  let oldScore = cScore;
    document.getElementById('cScore').innerText = ++oldScore;
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


 