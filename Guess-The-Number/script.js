"use strict";

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.getElementById("message").textContent = message; 
};

document.getElementById("check").addEventListener("click", function () {
  const guess = Number(document.getElementById("guess").value); 

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.getElementById("number").textContent = secretNumber; 

    document.body.style.backgroundColor = "#60b347"; 
    document.getElementById("number").style.width = "30rem"; 

    if (score > highscore) {
      highscore = score;
      document.getElementById("highscore").textContent = highscore; 
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.getElementById("score").textContent = score; 
    } else {
      displayMessage("💥 You lost the game!");
      document.getElementById("score").textContent = 0; 
    }
  }
});

document.getElementById("again").addEventListener("click", function () {
  
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  displayMessage("Start guessing...");
  document.getElementById("score").textContent = score; 
  document.getElementById("number").textContent = "?"; 
  document.getElementById("guess").value = ""; 

  document.body.style.backgroundColor = "#222"; 
  document.getElementById("number").style.width = "15rem"; 
});
