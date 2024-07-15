function getRandomComputerResult(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomindex = Math.floor(Math.random()* options.length) ;
    return options[randomindex];
}

function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}


const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    const result = getRoundResults(userOption);
    roundResultsMsg.innerText = result;
    if (result.includes('Player wins')) {
        roundResultsMsg.style.color = 'lightgreen';
        roundResultsMsg.classList.add('celebrate')
    } else if (result.includes('Computer wins')) {
        roundResultsMsg.style.color = 'red';
        roundResultsMsg.classList.remove('celebrate');
    } else {
        roundResultsMsg.style.color = 'yellow'; 
        // for tie or other results
        roundResultsMsg.classList.remove('celebrate');
    }
  };

  const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});