// variables and counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = [];

//array of potentail choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables to hold the reference
var winstext = document.getElementById("wins");
var lossestext = document.getElementById("losses");
var directionstext = document.getElementById("directions");
var guessesLefttext = document.getElementById("guessesLeft");
var guessedLetterstext = document.getElementById("guessedLetters");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function reset() {
    guessesLeft = 9;
    guessedLetters = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
}

// function myFunction() {
//     var guessedLetters = [];
//     var guessedLetterstext = document.getElementById("guessedLetters");
//     guessedLetterstext.textContent = guessedLetters.join(" , ");
// }
//function is run everytime when key is pressed
document.onkeyup = function (event) {
    //determines what key is pressed by the user
    var userGuess = event.key.toLowerCase();
    
    if (userGuess === computerGuess) {
        wins++;
        reset();
    } else {
        guessesLeft--;
        guessedLetters.push(userGuess);
        guessedLetterstext.textContent = guessedLetters.join(" , ");
    }

    if (guessesLeft == 0) {
        losses++;
        reset();
    }

    //hide the directions
    directionstext.textContent = "";

    //changes the counter of scores
    winstext.textContent = wins;
    lossestext.textContent = losses;
    guessesLefttext.textContent = guessesLeft;
}
alert("Press Enter to start!");