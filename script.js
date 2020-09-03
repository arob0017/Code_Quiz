var mainContent = document.querySelector(".Quiz");
var highscoreBtn = document.querySelector("#Highscore-btn");
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var questionTitle = document.querySelector("#question-title");
var answerBtn = document.querySelector("#answer-btn");

var final = document.querySelector("#final");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");

var highscoreInitial = document.querySelector("#highscore-initials")
var highscoreScore = document.querySelector("#highscore-score")
var backBtn = document.querySelector("#back");
var clearHistoryBtn = document.querySelector("#clear-history");
var scoreInput = document.querySelector("#scoreInput");

var quizBegin = document.querySelector("#quiz-begin");
var questionEL = document.querySelector("#question");
var quizDone = document.querySelector("#quiz-Done");
var scoreHistory = document.querySelector("#score-history")

var answerBtn = document.querySelectorAll(".answer-btn");

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

var questionCounter = 0;
var secondsLeft = 60;
var timerInterval;
var score = 0;
var answer;
var storage = JSON.parse(localStorage.getItem("highscores")) || []

// When start button is clicked, quiz will begin and time will countdown
startBtn.addEventListener("click", setTime);

for (var i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", checkAnswer);
};

// Begins the time countown, and starts quiz
function setTime() {
    startQuiz();
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            timerDone()
        }
    }, 1000);

};

function timerDone() {
    clearInterval(timerInterval);
    timer.innerHTML = 'Done';
    showScore();
}

function askQuestions() {
    if (questionCounter < questions.length) {
        questionTitle.textContent = questions[questionCounter].question;

        for (var i = 0; i < answerBtn.length; i++) {
            answerBtn[i].textContent = questions[questionCounter].choices[i];
        }
    }
    else {
        timerDone();
    }
};

function startQuiz() {
    quizBegin.style.display = "none";
    questionEL.style.display = "block";

    askQuestions();
};

function checkAnswer(event) {
    var userInput = event.target.textContent;

    var displayAnswerDiv = document.createElement("div");
    var displayAnswerEl = document.createElement("p")
    displayAnswerDiv.setAttribute("class", "displayAnswerDiv");
    displayAnswerDiv.appendChild(displayAnswerEl);
    mainContent.appendChild(displayAnswerDiv);

    if (userInput === questions[questionCounter].answer) {
        //add to score and display correct
        score++;
        displayAnswerEl.textContent = "Correct!";

    } else {
        //deduct 10 seconds from time and display wrong
        secondsLeft -= 10;
        displayAnswerEl.textContent = "Wrong!";
    }

    setTimeout(function () {
        displayAnswerDiv.removeChild(displayAnswerEl)
    }, 500)

    questionCounter++;
    askQuestions();
};
// When timer runs out or all questions have been answered, 
function showScore() {
    questionEL.style.display = "none";
    quizDone.style.display = "block";
    initials.value = "";
    final.innerHTML = score + " out of " + questions.length;
    clearInterval(timerInterval);
    generateHighscores();
};

submitBtn.addEventListener("click", highscore);

function highscore() {
    var value = initials.value.trim()

    if (value === "") {
        alert("Initials cannot be blank");
    } else {
        // get values from the elements and update local storage with the score
        // 1. get the old value fromlocal storage

        storage = storage.concat({ value, score })
        localStorage.setItem("highscores", JSON.stringify(storage))
    }
    quizDone.style.display = "none";
    scoreHistory.style.display = "block";
    generateHighscores
};

function generateHighscores() {
    highscoreInitial.innerHTML = "";
    highscoreScore.innerHTML = "";

    if (storage.length === 0) {
        // Created a message telling the user to play their first game
        var resultsEl = document.createElement("p")
        var resultsDiv = document.createElement("div");
        resultsDiv.setAttribute("class", "displayAnswerDiv");

        resultsEl.textContent = "No results stored. Please play your first game!";
        resultsDiv.appendChild(resultsEl);
        scoreInput.appendChild(resultsDiv);
    } else {

        for (i = 0; i < storage.length; i++) {
            var newInitial = document.createElement("li");
            var newScore = document.createElement("li");
            newInitial.textContent = storage[i].value + " - " + storage[i].score;
            newScore.textContent = storage[i].score;
            highscoreInitial.appendChild(newInitial);

        }
        removeEls(resultsEl);
    }
}


// When 'View High Scores!' button is clicked, the html will updated the html displayed to high score history
highscoreBtn.addEventListener("click", function () {
    quizDone.style.display = "none";
    quizBegin.style.display = "none";
    questionEL.style.display = "none";
    scoreHistory.style.display = "block";
    generateHighscores();

});

//When 'Back" button is clicked, page will display #quizBegin, the starting page
backBtn.addEventListener("click", function () {
    quizDone.style.display = "none";
    quizBegin.style.display = "block";
    questionEL.style.display = "none";
    scoreHistory.style.display = "none";
    secondsLeft = 60;
    score = 0;
    questionCounter = 0;
});


// clear history button
clearHistoryBtn.addEventListener("click", clearScore);
function clearScore(event) {
    event.preventDefault();
    window.localStorage.clear();
    removeEls(highscoreInitial);
};

