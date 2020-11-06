//variables
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

var addInitialsEl = document.querySelector("#addInitials");

var initialsEl = document.querySelector("#enterInitials");

var highScoreScreenEl = document.querySelector("#highScoreScreen");

var userScoreEl = document.querySelector("#userScore");

var yourScoreEl = document.querySelector("#yourScore");

var h1El = document.createElement("h1");

var h1El2 = document.createElement("h1");

trueFansEl = document.querySelector("#trueFans");





//variable for the current question that will display to the user
var currentQuestion = 0;

//variable to keep track of score, initialized
var score = 0;

//counter variable to count the number of answers that were inputted
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
        c: '2',
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


//array for highscores
var highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

//display questions on screen
function renderQuestion () {
    
    if (currentQuestion === myQuestions.length) {

        clearInterval(timerInterval);

        localStorage.setItem("mostRecentScore", score);

        currentQuestion = 0;
        
        timerEl.style.display = "none";
        
        quizBoxEl.style.display = "none";
        
        addInitialsEl.style.display = "block";
        
        h1El.innerHTML = "Your Score: " + score;

        yourScoreEl.append(h1El);

    } else {
        
        var q = myQuestions[currentQuestion];
        
        questionEl.innerHTML = q.question;
        
        choiceAEl.innerHTML = q.a;
        
        choiceBEl.innerHTML = q.b;
        
        choiceCEl.innerHTML = q.c;
        
        choiceDEl.innerHTML = q.d;
    }
}

//when the start button is clicked, startQuiz function will begin
startScreenEl.addEventListener("click", startQuiz);

//function to start the quiz and display questions and timer
function startQuiz () {
    
    //remove the startScreen display
    startScreenEl.style.display = "none";

    //function to display questions on screen
    renderQuestion();

    //display quixBox
    quizBoxEl.style.display = "block";

    //set timer
    setTimer();

    //show timer
    timerEl.style.display = "block";

    highScoreScreenEl.style.display = "none";

    addInitialsEl.style.display = "none";

    h1El2.innerHTML = " ";


}

//variable to initialize the timer
var secondsLeft = 5;

//variable to initialize timerInterval
var timerInterval = 0;

//function for the timer
function setTimer() {
    
    timerInterval = setInterval(function() {

        secondsLeft--;
        
        timerEl.textContent = secondsLeft;
    
        //if timer goes to 0, move onto the next question and initialize timer to 5
        if(secondsLeft === 0) {
        
            //clearInterval(timerInterval);
            currentQuestion++;
        
            secondsLeft = 5;
        
            renderQuestion();
        }
    }, 1000);
}

//check answer funtion
function checkAnswer(answer) {
    
    //if the button the user clicked is the same as the correctAnswer property in the array
    if(answer == myQuestions[currentQuestion].correctAnswer) {
        
        // answerIsCorrect();
       
        //add 1 to counter
        counter++;
        
        //add score by 200
        score+= 200;

        console.log(score);
        
        console.log(counter);
            
        //go to the next question and initialize timer
        currentQuestion++;
        
        renderQuestion();
        
        secondsLeft = 5;
    
    } else { //if answer is wrong
        
        // answerIsIncorrect();

        //add 1 to counter
        counter++;
        
        console.log(counter);

        //go to the next question and initialize timer
        currentQuestion++;
        
        renderQuestion();
        
        secondsLeft = 5;
    }
}

// function answerIsCorrect () {

//     document.getElementById(checkAnswer(answer)).style.backgroundColor = "#FFFFFF";

// }

// function answerIsIncorrect () {

//     document.getElementById(checkAnswer(answer)).style.backgroundColor = "#FF0000";

// }

//add event listener for submit button to add initials and score



function saveInitials() {

    var mostRecentScore = {

        initials: initialsEl.value, 
        score: score
    }

    highScores.push(mostRecentScore);

    console.log(highScores);

    console.log(mostRecentScore);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(localStorage);

    addInitialsEl.style.display = "none";

    h1El.innerHTML = " ";

    for (i = 0; i < highScores.length; i++) {

        var pEl = document.createElement("p");

        pEl.textContent = highScores[i].initials + " - " + highScores[i].score;

        userScoreEl.append(pEl);
    }

    highScoreScreenEl.style.display = "block";

    h1El2.innerHTML = "True Fans: ";

    trueFans.append(h1El2);

}






