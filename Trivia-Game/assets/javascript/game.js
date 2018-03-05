var correctAnswers = 0;
var incorrectAnswers = 0; 


function startGame() {

$("#game-over").toggleClass("hidden")

var timeleft = 121;
var triviaTimer = setInterval(function() {
  timeleft--;
  document.getElementById("timer").innerHTML = timeleft;
    if(timeleft <= 0)
      clearInterval(triviaTimer);
    if(timeleft === 0) {
      submit();
    }
    },1000);
  }

  // startGame();

function submit() {

var q1 = document.getElementById("q1a1").checked;
  if (q1 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

var q2 = document.getElementById("q2a3").checked;
  if (q2 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };
  
var q3 = document.getElementById("q3a2").checked;
  if (q3 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

var q4 = document.getElementById("q4a4").checked;
  if (q4 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

var q5 = document.getElementById("q5a2").checked;
  if (q5 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

var q6 = document.getElementById("q6a3").checked;
  if (q6 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };
  
var q7 = document.getElementById("q7a2").checked;
  if (q7 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

var q8 = document.getElementById("q8a3").checked;
  if (q8 === true) {
    correctAnswers++
  } else {
    incorrectAnswers++
  };

document.getElementById("answers").innerHTML = "<h1>RESULTS<h1><p>Correct Answers: " + correctAnswers + "</p>" + "<p>Incorrect Answers: " + incorrectAnswers + "</p>";
document.getElementById("game-over").innerHTML = "<div></div>";
$("#timer").toggleClass("hidden");
$("#hide").toggleClass("hidden");

}
