var highscoreBtn = document.querySelector("#Highscore-btn");
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var questionTitle = document.querySelector("#question-title");
var answerBtn = document.querySelector("#answer-btn");

var final = document.querySelector("#final");
var finalInput = document.querySelector("#final-input");
var finalSubmit = document.querySelector("#final-submit");

var scores = document.querySelector("#scores");
var backBtn = document.querySelector("#back");
var clearHistoryBtn = document.querySelector("#clear-history");


var quizBegin = document.querySelector("#quiz-begin");
var questionEL = document.querySelector("#question");
var quizDone = document.querySelector("#quiz-Done");
var scoreHistory = document.querySelector("#score-history")

var answerBtn = document.querySelectorAll(".answer-btn");
console.log(answerBtn)
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts",
    },
    {
        question: "The condition in an if/ else statement is enclosed within ____.",
        choices: ["Parenthesis", "Curly Brackets", "Quotes", "Square Brackets"],
        answer: "Parenthesis",
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["Commas", "Quotes", "Curly Brackets", "Parenthesis"],
        answer: "Parenthesis",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "console.log", "for loops", "Terminal/ Bash"],
        answer: "console.log",
    },
];

// function renderQuestions() {

    // for (var i = 0; i < questions.length; i++) {

// }
// }
var questionCounter = 0;
var secondsLeft = 10;
var timerInterval;
var score = 0;
var answer;
//empty array for highscores
//storing scores in window
var storedScores = JSON.parse(window.localStorage.getItem("highScores")); 



startBtn.addEventListener("click", setTime);

for (var i = 0; i < answerBtn.length; i++) {    
    answerBtn[i].addEventListener("click", checkAnswer);  
};


function setTime() {
    startQuiz();
    timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.innerHTML='Done';
            showScore();
        }
    }, 1000);

};

function askQuestions() {
    questionTitle.textContent = questions[questionCounter].question;
    for(var i = 0; i < answerBtn.length; i++) {
        answerBtn[i].textContent = questions[questionCounter].choices[i];
    }
};

function startQuiz() {
    quizBegin.style.display = "none";
    questionEL.style.display = "block";
      
    askQuestions();
};

function checkAnswer(event) {
    var userInput = event.target.textContent;
    if (userInput === questions[questionCounter].answer) {
        console.log(true)
    } else (console.log(false))
    questionCounter++;
    askQuestions();
}

function showScore() {

}