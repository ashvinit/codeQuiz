//variables
var highScoresEl = document.querySelector("#highScores");
var timerEl = document.querySelector("#timer");
var startScreenEl = document.querySelector("#startScreen");
var startBtn = document.querySelector("#startQuiz");
var quizBox = document.querySelector("#quizBox");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var questionNumber = 0;
var score = 0;

//array of questions
var myQuestions = [
    {
        question: "What is Kim's full name?",
        options:[
            'Kim Mary Kardashian West',
            'Kimberly Noel Kardashian West',
            'Kim Kardashian West',
            'Kimberly Kardashian West'],
        correctAnswer: 1

    },
    {
        question: "Who are Kim's biological parents?",
        options:[
            'Kris & Robert',
            'Kaitlyn & Robert',
            'Kaitlyn & Bruce',
            'Kris & Bruce'
        ],
        correctAnswer: 0

    },
    {
        question: "How many children does Kim have?",
        options:[
            '3',
            '5',
            '3',
            '4'
        ],
        correctAnswer: '3'
    },
    {
        question: "What are the names of kim's children?",
        options:[
            'North, Saint, Reign, Chicago',
            'North, Saint, Chicago, Pslam',
            'North, Reign, Chicago, Psalm',
            'North, Saint, Chicago'
        ],
        correctAnswer: 1
    },
    {
        question: "What are the names of Kim's sisters?",
        options:[
            'Kourtney, Khloe, Kylie, Krissy',
            'Kendall, Karen, Khloe, Kylie', 
            'Kourtney, Khloe, Kendall, Kylie',
            'Kris, Khloe, Kourtney, Kendall'
        ],
        correctAnswer: 2
    }
];

//display questions
var lastQuestionIndex = myQuestions.length -1;
var currentQuestionIndex = 0;

function renderQuestion () {
    let q = questions[currentQuestionIndex];
    myQuestions.innerHTML = q.question;
    myQuestions.innerHTML = q.choices;

}

function checkAnswer(answer) {
    if(question[currentQuestionIndex].correct == answer){
        score++
        correctAnswer();
    } else{
        wrongAnswer();
    }
if(currentQuestionIndex < lastQuestionIndex){
    questionNumber = 0;
    currentQuestionIndex++;
    questionRender();
} else{
    clearInterval(TIMER);
    scoreRender();
}
}



//start timer

var secondsLeft = 10;

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
    var numberOfQuestions = myQuestions.length;

    for (var i = 0; i < numberOfQuestions; i++) {
        console.log(i);

    }
}

//When start button is clicked, start timer & presebnt questions
startBtn.addEventListener("click", function() {
    startTimer();
    showQuestions();
});
