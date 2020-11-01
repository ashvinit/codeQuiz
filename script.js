//variables from html
var highScores = document.querySelector("#highScores");

var timer = document.querySelector("#timer");

var startScreen = document.querySelector("#startScreen");

var startBtn = document.querySelector("#startQuiz");

var quizBox = document.querySelector("#quizBox");

var question = document.querySelector("#question");

var choices = document.querySelector("#choices");

var a = document.querySelector("#a");

var b = document.querySelector("#b");

var c = document.querySelector("#c");

var d = document.querySelector("#d");

//the index of the last question
// var lastQuestion = myQuestions.length - 1;

//current question
var currentQuestion = 0;

var score = 0;

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
        a: 'Kourtney, Khloe, Kylie, Krissy',
        b: 'Kendall, Karen, Khloe, Kylie', 
        c: 'Kourtney, Khloe, Kendall, Kylie',
        d: 'Kris, Khloe, Kourtney, Kendall',
        correctAnswer: 'c'
    }
]

//display questions on screen
function renderQuestion () {
    var q = myQuestions[currentQuestion];
    question.innerHTML = q.question;
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;
}

//start button
startScreen.addEventListener("click", startQuiz);

//function to start the quiz
function startQuiz () {
    //remove the startScreen display
    startScreen.style.display = "none";

    //function to display questions on screen
    renderQuestion();

    //display quixBox
    quizBox.style.display = "block";

    //set timer
    setTimer();


}



//dispaly timer
var secondsLeft = 10;

function setTimer() {
    timer.style.display = "block";

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft + " seconds";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

//check answer
function checkAnswer(answer) {
    if(answer == myQuestions[currentQuestion].correct) {
        score++
    } else {

    }
}
