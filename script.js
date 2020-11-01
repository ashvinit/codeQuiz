//variables
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

var questionNumber = 0;
var timePerQuestion = 10;
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
];

//display questions
var lastQuestionIndex = myQuestions.length -1;
var currentQuestionIndex = 0;

function renderQuestion () {
    let q = questions[currentQuestionIndex];
    myQuestions.innerHTML = q.question;
    myQuestions.innerHTML = q.choices;

}


//function to check each answer and increase score if answer is correct
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


//show questions
function showQuestions() {
    var numberOfQuestions = myQuestions.length;

    for (var i = 0; i < numberOfQuestions; i++) {
        console.log(i);

    }
}

//when start button is clicked, start the startQuiz function
startBtn.addEventListener("click", startQuiz);

//startQuiz funtion
function startQuiz() {
    startScreenEl.style.display = "none";

    
}

