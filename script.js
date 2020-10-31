//variables
var highScoresEl = document.querySelector(".highScores");
var timerEl = document.querySelector(".timer");
var quizBoxEl = document.querySelector(".quizBox");
var startBtn = document.querySelector(".startQuiz");


//When start button is clicked, start timer & presebnt questions
startBtn.addEventListener("click", function() {
    startTimer();
    questions();
});
