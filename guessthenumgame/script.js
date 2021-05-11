"use strict";

//secret number generator
let secretNum = Math.trunc(Math.random() * 20) + 1;

//scores
let score = 20;
let highscore = 0;

//DOM variables
const check = document.querySelector(".check");
const guessNum = document.querySelector(".guess");
const messageOfInfo = document.querySelector(".message");
const num = document.querySelector(".number");
const scoreCounter = document.querySelector(".score");
const body = document.querySelector("body");
const highscoreSave = document.querySelector(".highscore");
const again = document.querySelector(".again");
//function to display message
const displayMessage = function (message) {
  messageOfInfo.textContent = message;
};
//too see secretnum
//num.textContent = secretNum;
//game logic
check.addEventListener("click", function () {
  const guess = Number(guessNum.value);
  //check if no input
  if (!guess || guess > 20) {
    displayMessage("Not a valid option!");
  }
  //when a player wins
  else if (guess === secretNum) {
    displayMessage("Correct Number!");
    body.style.backgroundColor = "#60b347";
    num.style.width = "30rem";
    num.textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      highscoreSave.textContent = highscore;
    }
  }
  //when a guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "Too High" : "Too Low");
      score--;
      scoreCounter.textContent = score;
    } else {
      body.style.backgroundColor = "rgb(194, 78, 78)";
      displayMessage("You Lost The Game!");
      num.textContent = secretNum;
      scoreCounter.textContent = 0;
    }
  }
});
again.addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  scoreCounter.textContent = score;
  num.textContent = "?";
  guessNum.value = "";
  body.style.backgroundColor = "rgb(90, 89, 89)";
  num.style.width = "15rem";
});
