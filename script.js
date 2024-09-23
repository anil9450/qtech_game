const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, playerChoice, computerChoice);
    updateScore(winner);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  }
  return "computer";
}

function showResult(winner, playerChoice, computerChoice) {
  const result = document.getElementById("result");
  if (winner === "draw") {
    result.textContent = `It's a draw! Both chose ${playerChoice}.`;
  } else if (winner === "player") {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
