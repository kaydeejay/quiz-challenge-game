var startScreen = document.querySelector(".start-screen");
var highScores = document.querySelector(".high-scores");
var scoresList = document.querySelector("#scoresList");
var quizPage = document.querySelector(".quiz-page");
var endScreen = document.querySelector(".end-screen");
var questionTitle = document.querySelector("#question");
var multipleChoice = document.querySelector("#multipleChoice");
var timeRemaining = 60000;
var timerEl = document.getElementById("timer");
var timerStart;
var questionIndex = 0;


var questions = [
    {
        title: "Descendant of Isildur and rightful heir to the Thrones of Arnor and Gondor:",
        choices: ["Aragorn", "Gandalf", "Frodo Baggins", "Galadriel"],
        answer: "Aragorn"
    },
    {
        title: "Cousin to Bilbo Baggins, inherits Bag End and undertakes the Quest to carry the One Ring to Mordor and destroy it in the fires of Mount Doom:",
        choices: ["Frodo Baggins", "Denethor", "Saruman the White", "Treebeard"],
        answer: "Frodo Baggins"
    },
    {
        title: "A River Hobbit, obsessed with the One Ring who plots to steal it back:",
        choices: ["Bilbo Baggins", "Samwise Gamgee", "Gollum", "Legolas Greenleaf"],
        answer: "Gollum"
    },
    {
        title: "A fallen Maia who helped the Elves of Eregion forge the Rings of Power in the Second Age:",
        choices: ["Sauron", "Gandalf", "Saruman the White", "Shelob"],
        answer: "Sauron"
    },
    {
        title: "An Elf prince and son of King Thranduil of the Silvan Elves of Northern Mirkwood:",
        choices: ["Frodo Baggins", "Gandalf", "Galadriel", "Legolas Greenleaf"],
        answer: "Legolas Greenleaf"
    },
    {
        title: "A Wizard, member of the Istari Order, and leader of the Fellowship of the Ring and The Army of the West:",
        choices: ["Saruman the White", "Legolas Greenleaf", "Gollum", "Gandalf"],
        answer: "Gandalf"
    }
];

function startGame(){
    startScreen.setAttribute("style", "display: none;");
    highScores.setAttribute("style", "display: none;");
    endScreen.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: block;");
    timerEl.textContent = "Time Remaining: " + (timeRemaining/1000);
    timerStart = setInterval(countdown, 1000);
    questionIndex = 0;
    nextQuestion(questionIndex);
}

function endGame(){
    clearInterval(timerStart);
    var finalScore = parseInt(timeRemaining/1000);
    timeRemaining = 60000;
    questionIndex = 0;
    startScreen.setAttribute("style", "display: none;");
    highScores.setAttribute("style", "display: none;");
    endScreen.setAttribute("style", "display: block;");
    quizPage.setAttribute("style", "display: none;");
    document.querySelector("#userScoreEl").textContent = finalScore;
    return finalScore;
}

function countdown(){
    timeRemaining -= 1000;
    if (timeRemaining <= 0) {
        clearInterval(timerStart);
        endGame();
    } 
    timerEl.textContent = "Time Remaining: " + (timeRemaining/1000);
}

function nextQuestion(num){
    if (questionIndex === questions.length){
        var finalScore = endGame();
        console.log(finalScore);
        return;
    }
    multipleChoice.innerHTML = "";
    var currentQuestion = questions[num];
    questionTitle.textContent = currentQuestion.title;
    // generate buttons 
    for (var i = 0; i < currentQuestion.choices.length; i++){
        var ansButton = document.createElement("button");
        ansButton.textContent = questions[num].choices[i];
        ansButton.setAttribute("class", "btn btn-primary");
        ansButton.setAttribute("data-index", i);
        multipleChoice.append(ansButton);
    }
    multipleChoice.addEventListener("click", gradeQuest);
}

function gradeQuest(){
    var userAnswer = event.target.textContent;
    var currentAnswer = questions[questionIndex].answer;
    var gradeDisplay = document.querySelector("#showResult");
    if (userAnswer === currentAnswer){
        gradeDisplay.textContent = "Correct!";
        setTimeout(function(){
            gradeDisplay.textContent = "";
        }, 1000);
    }
    else {
        timeRemaining -= 15000;
        gradeDisplay.textContent = "Wrong!";
        setTimeout(function(){
            gradeDisplay.textContent = "";
        }, 1000);    
    }
    questionIndex++;
    nextQuestion(questionIndex);
}

function appendHighScore(){
    var initials = document.querySelector("#initialInput").value;
    var score = parseInt(document.querySelector("#userScoreEl").textContent);
    localStorage.setItem(initials, score);
    showHighScores();
    renderScores();
}

function renderScores(){
    scoresList.innerHTML = "";
    var scores = localStorage;
    var sortableScores = [];
    for (var initial in scores) {
        sortableScores.push([initial, scores[initial]]);
    }
    var sortedScores = sortableScores.slice(0, (sortableScores.length - 6));
    sortedScores.sort(function(a, b){
        return b[1] - a[1];
    });
    var backgroundColorSelector = false;    
    for (var i = 0; i < sortedScores.length; i++) {
        var newInitEl = document.createElement("li");
        var newScoreEl = document.createElement("span");
        newInitEl.textContent = sortedScores[i][0];
        newScoreEl.textContent = sortedScores[i][1];
        newInitEl.append(newScoreEl);
        newScoreEl.setAttribute("style", "float: right;");
        if (backgroundColorSelector === false){
            newInitEl.setAttribute("style", "background-color: #b3d9ff");
            backgroundColorSelector = true;
        }
        else {
            newInitEl.setAttribute("style", "background-color: #4da6ff");
            backgroundColorSelector = false;
        }
        scoresList.append(newInitEl);
    }
}

function showHighScores(){
    startScreen.setAttribute("style", "display: none;");
    highScores.setAttribute("style", "display: block;");
    endScreen.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: none;");
    renderScores();
}

function clearHighScores(){
    localStorage.clear();
    renderScores();
}

function showStartScreen(){
    startScreen.setAttribute("style", "display: block;");
    highScores.setAttribute("style", "display: none;");
    endScreen.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: none;");
}