var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses left, letters guessed.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;


  if (computerGuess === userGuess) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // return to new computer choice

  }

  else {
    guessesLeft--;
    lettersGuessed.push(userGuess);
    if (lettersGuessed.length === 9) {
      losses++;
      guessesLeft = 9;
      lettersGuessed.length = 0;
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // return to new computer choice
    }
  }

  if (userGuess) {
    reWriteStats();
  }



  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
  document.querySelector("#letters-guessed").innerHTML = lettersGuessed;

}

function reWriteStats() {
  console.log("Wins: " + wins);
  console.log("Losses: " + losses);
  console.log("Guesses left: " + guessesLeft);
  console.log("Letters guessed: " + lettersGuessed);
  console.log("------------------------------");
}