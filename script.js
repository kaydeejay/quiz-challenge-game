var startScreen = document.querySelector(".start-screen");
var highScores = document.querySelector(".high-scores");
var quizPage = document.querySelector(".quiz-page");
var endScreen = document.querySelector(".end-screen");
var timer = 10000;
var questionTitle = document.querySelector("#question");
var multipleChoice = document.querySelector("#multipleChoice");


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

function endGame(){
    alert("Game over");
    clearInterval(startTimer);
}

function countdown(){
    timer -= 1000;
    if (timer === 0){
        // skip straight to end screen, score = 0
        endGame();
    }
    document.getElementById("timer").textContent = "Time Remaining: " + (timer/1000);
}

function startGame(){
    //start timer
    document.getElementById("timer").textContent = "Time Remaining: " + (timer/1000);
    var startTimer = setInterval(countdown, 1000);
    startScreen.setAttribute("style", "display: none");
    quizPage.setAttribute("style","display: block;");    
}

