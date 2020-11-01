//variables
var highScoresEl = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var quizBoxEl = document.querySelector("#quizBox");
var startBtn = document.querySelector("#startQuiz");
var showQuestions = document.querySelector("#showQuestions");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");


var secondsLeft = 10;

//array of questions
var myQuestions = [
    {
        question: "What is Kim's full name?",
        a: 'Kim Mary Kardashian West',
        b: 'Kimberly Noel Kardashian West',
        c: 'Kim Kardashian West',
        d: 'Kimberly Kardashian West',
        correctAnswer: 'b'

    },
    {
        question: "Who are Kim's biological parents?",
        a: 'Kris & Robert',
        b: 'Kaitlyn & Robert',
        c: 'Kaitlyn & Bruce',
        d: 'Kris & Bruce',
        correctAnswer: 'a'

    },
    {
        question: "How many children does Kim have?",
        a: '3',
        b: '5',
        c: '3',
        d: '4',
        correctAnswer: 'd'
    },
    {
        question: "What are the names of kim's children?",
        a: 'North, Saint, Reign, Chicago',
        b: 'North, Saint, Chicago, Pslam',
        c: 'North, Reign, Chicago, Psalm',
        d: 'North, Saint, Chicago',
            correctAnswer: 'b'
    },
    {
        question: "What are the names of Kim's sisters?",
        a: 'Kourtney, Khloe, Kylie, Kris',
        b: 'Kendall, Kris, Khloe, Kylie', 
        c: 'Kylie, Khloe, Kendall, Kourtney',
        d: 'Kris, Khloe, Kourtney, Kendall',
        correctAnswer: 'c'

    }
]

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
    showQuestions();
});
