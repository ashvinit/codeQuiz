//variables
var highScoresEl = document.querySelector(".highScores");
var timerEl = document.querySelector(".timer");
var quizBoxEl = document.querySelector(".quizBox");
var startBtn = document.querySelector(".startQuiz");

var secondsLeft = 60;

//start timer
function startTimer() {
    timerEl.style.display = "block";
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time Left: " + secondsLeft + " seconds";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          addScore();
        }
    
      }, 1000);
}


//When start button is clicked, start timer & presebnt questions
startBtn.addEventListener("click", function() {
    startTimer();
    questions();
});
