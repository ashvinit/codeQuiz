//variables
var highScoresEl = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var quizBoxEl = document.querySelector("#quizBox");
var startBtn = document.querySelector("#startQuiz");

var secondsLeft = 10;

//array of questions
var myQuestions = [
    {
        question: "What is Kim's full name?",
        answers: {
            a: 'Kim Mary Kardashian West',
            b: 'Kimberly Noel Kardashian West',
            c: 'Kim Kardashian West',
            d: 'Kimberly Kardashian West'
        }
    },
    {
        question: "Who are Kim's biological parents?",
        answers: {
            a: 'Kris & Robert',
            b: 'Kaitlyn & Robert',
            c: 'Kaitlyn & Bruce',
            d: 'Kris & Bruce'
        }
    },
    {
        question: "How many children does Kim have?",
        answers: {
            a: '3',
            b: '5',
            c: '3',
            d: '4'
        }
    },
    {
        question: "What are the names of kim's children?",
        answers: {
            a: 'North, Saint, Reign, Chicago',
            b: 'North, Saint, Chicago, Pslam',
            c: 'North, Reign, Chicago, Psalm',
            d: 'North, Saint, Chicago'
        }
    },
    {
        question: "What are the names of Kim's sisters?",
        answers: {
            a: 'Kourtney, Khloe, Kylie, Kendall',
            b: 'Kendall, Kris, Khloe, Kylie', 
            c: 'Kylie, Khloe, Kris, Kourtney',
            d: 'Kris, Khloe, Kourtney, Kendall'
        }
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

//show questions
function showQuestions() {
    quizBoxEl.style.display = "none";

    var answer;

    for (var i = 0; i < myQuestions.length; i++) {

        

    }

}




//When start button is clicked, start timer & presebnt questions
startBtn.addEventListener("click", function() {
    startTimer();
    showQuestions();
});
