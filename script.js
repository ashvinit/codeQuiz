//variables from html
var highScoresEl = document.querySelector("#highScores");

var timerEl = document.querySelector("#timer");

var startScreenEl = document.querySelector("#startScreen");

var startBtnEl = document.querySelector("#startQuiz");

var quizBoxEl = document.querySelector("#quizBox");

var questionEl = document.querySelector("#question");

var choicesEl = document.querySelector("#choices");

var choiceAEl = document.querySelector("#a");

var choiceBEl = document.querySelector("#b");

var choiceCEl = document.querySelector("#c");

var choiceDEl = document.querySelector("#d");

var highScoreScreenEl = document.querySelector("#highScoreScreen");


//current question
var currentQuestion = 0;

var score = 0;

var counter = 0;

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
    questionEl.innerHTML = q.question;
    choiceAEl.innerHTML = q.a;
    choiceBEl.innerHTML = q.b;
    choiceCEl.innerHTML = q.c;
    choiceDEl.innerHTML = q.d;

}

//start button
startScreenEl.addEventListener("click", startQuiz);

//function to start the quiz
function startQuiz () {
    //remove the startScreen display
    startScreenEl.style.display = "none";

    //function to display questions on screen
    renderQuestion();

    //display quixBox
    quizBoxEl.style.display = "block";

    //set timer
    setTimer();

    timerEl.style.display = "block";

}

//dispaly timer
var secondsLeft = 5;
var timerInterval = 0;

function setTimer() {

    timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft + " seconds";
    
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        currentQuestion++;
        renderQuestion();
        secondsLeft = 5;
    }
}, 1000);
}

var lastQuestion = myQuestions.length;

//check answer
function checkAnswer(answer) {
    if(answer == myQuestions[currentQuestion].correctAnswer) {
        //alert("correct");
        counter++;
        score+= 200;
        console.log(score);
        console.log(counter);
        //answerIsCorrect();
        currentQuestion++;
        renderQuestion();
        secondsLeft = 5;
        
        

    } else {
        //answerIsIncorrect();
        //alert("incorrect");
        counter++;
        console.log(counter);
        currentQuestion++;
        renderQuestion();
        secondsLeft = 5;
        
    }

    if (counter == lastQuestion) {
        timerEl.style.display = "none";
        quizBoxEl.style.display = "none";
        highScoreScreenEl.style.display = "block";
        addInitials();
    }

}

// function answerIsCorrect () {
//     document.getElementById(answer).style.backgroundColor = "#FFFFFF";
// }

// function answerIsIncorrect () {
//     document.getElementById(answer).style.backgroundColor = "#FF0000";
// }


highScoreScreenEl.addEventListener
