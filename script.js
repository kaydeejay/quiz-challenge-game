var startScreen = document.querySelector(".start-screen");
var highScores = document.querySelector(".high-scores");
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

document.getElementById("startGameButton").addEventListener("click", startGame);

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
    var finalScore = timeRemaining;
    clearInterval(timerStart);
    timeRemaining = 60000;
    questionIndex = 0;
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
        // invoke endScreen function here!
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
