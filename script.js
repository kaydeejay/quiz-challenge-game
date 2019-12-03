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

var gameScreens = [
    {
        id: "startScreen",
        title: "Lord of the Rings: Name That Character!",
        content: "Can you guess the character based on the description?",
        buttons: ["Start!", "High Scores"],
        buttonFunctions: ["startGame()", "showHighScores()"]
    },
    {
        id: "highScores",
        title: "High Scores",
        content: "",
        buttons: ["Back", "Clear High Scores"],
        buttonFunctions: [];
    },
    {
        id: "scoreCard",
        title: "Results!",
        content: "",
        buttons: ["Enter Your Score", "Start Over"],
        buttonFunctions: [];
    }
];

var card = document.querySelector("#cardBody");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var buttonField = document.querySelector("#buttonField");

//for changing between menu pages, NOT game question pages!
//right now this is hardcoded to open the startScreen. How can I make it dynamically
//pick the desired screen?
function changeCard(id){
    var gsIndex = 0;
    for (var i = 0; i < gameScreens.length; i++) {
        // if the object at index i contains an id that matches the argument passed in, 
        // gsIndex = i.
        // then run a function that builds a new page with the index of the object i 
        // in gameScreens. 
    }

    // cardTitle.textContent = gameScreens[0].title;
    // cardText.textContent = gameScreens[0].content;
    // for (var i = 0; i < gameScreens[0].buttons.length; i++){
    //     var newButton = document.createElement("a");
    //     newButton.setAttribute("class", "btn btn-primary");
    //     newButton.setAttribute("id", "button-" + i);
    //     newButton.setAttribute("onclick", gameScreens[0].buttonFunctions[i])
    //     newButton.innerHTML = gameScreens[0].buttons[i];
    //     buttonField.appendChild(newButton);
    // }
}

//
function startGame(){}

function showHighScores(){}

function nextQuestion(){}

// when the user first arrives at the page,
// they are greeted with the "start screen"
    // start screen gets built with the beginGame function, declared onload.
