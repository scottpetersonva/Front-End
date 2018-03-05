var correctAnswers = 0;
var incorrectAnswers = 0;
// var game = `<section class="container instructions-header">
// <div class="row">
//     <div class="col-md-12">
//         <h2 id="answers" class="instructions">TIMER</h2>
//             <p id="timer" class="instructions"></p>
//     </div>
// </div>
// </section>
// <section id="game-over" class="container container-body">
// <div class="row">
//     <form class="col-md-12 question">
//             <p>What is the deepest lake in the world?</p>
//             <label class="radio-button">Lake Baikal
//               <input id="q1a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Lake Michigan
//               <input id="q1a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Lake Titicaca
//               <input id="q1a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Lake Victoria
//               <input id="q1a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>  
//     </form>
//     <form class="col-md-12 question">
//             <p>2. What is America's oldest national park?</p>
//             <label class="radio-button">Yosimite
//               <input id="q2a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Glacier
//               <input id="q2a2" class="input"type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Yellowstone
//               <input id="q2a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Acadia
//               <input id="q2a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>   
//     </form>
//     <form class="col-md-12 question">
//             <p>3. Which US state has a unicameral legislature?</p>
//             <label class="radio-button">Maine
//               <input id="q3a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Nebraska
//               <input id="q3a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Louisiana
//               <input id="q3a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">California
//               <input id="q3a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>   
//     </form>
//     <form class="col-md-12 question">
//             <p>4. This US president signed into law the Antiquities Act allowing the president to designate landmarks, structures, and objects of historic or scientific interest as National Monuments</p>
//             <label class="radio-button">Woodrow Wilson
//               <input id="q4a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">William McKinley
//               <input id="q4a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">William Taft
//               <input id="q4a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Theodore Roosevelt
//               <input id="q4a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>    
//     </form>
//     <form class="col-md-12 question">
//             <p>5. What is the longest river in the United States?</p>
//             <label class="radio-button">Colorado
//               <input id="q5a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Missouri
//               <input id="q5a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Yukon
//               <input id="q5a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Rio Grande
//               <input id="q5a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>    
//     </form>
//     <form class="col-md-12 question">
//             <p>6. What is the most populated state capital in the US?</p>
//             <label class="radio-button">Denver
//               <input id="q6a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Indianapolis
//               <input id="q6a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Phoenix
//               <input id="q6a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Atlanta
//               <input id="q6a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>   
//     </form>
//     <form class="col-md-12 question">
//             <p>7. Texas was an Independent Republic for how many years?</p>
//             <label class="radio-button">5 years
//               <input id="q7a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">10 years
//               <input id="q7a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">15 years
//               <input id="q7a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">20 years
//               <input id="q7a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>    
//     </form>
//     <form class="col-md-12 question">
//             <p>8. Pluto was discovered at an observatory in which US State?</p>
//             <label class="radio-button">Washington
//               <input id="q8a1" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Maine
//               <input id="q8a2" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">Arizona
//               <input id="q8a3" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>
//             <label class="radio-button">California
//               <input id="q8a4" type="radio" name="radio">
//               <span class="checkmark"></span>
//             </label>    
//     </form>

//     <div class="col-md-12 question">
//         <button onclick="submit()" type="button" class="btn btn-primary btn-lg">SUBMIT</button>
//     </div>`


function startGame() {

$("#game-over").toggleClass("hidden")

var timeleft = 121;
var triviaTimer = setInterval(function() {console.log("it works");
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

document.getElementById("answers").innerHTML = "<h1>RESULTS<h1><p>Correct Answers: " + correctAnswers + "</p>" + "<p>Incorrect Answers: " + incorrectAnswers + "</p>" + "<p>TIMER</p>";
document.getElementById("game-over").innerHTML = "<div></div>";
console.log("Correct Answers: " + correctAnswers);
console.log("Incorrect Answers: " + incorrectAnswers);
timeleft = 1;

}
