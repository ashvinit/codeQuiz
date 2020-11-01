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

var currentQuestion = {};

var score = 0;

var questionNumber = 0;

var allQuestions = {};

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

