// variables and counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

//array of potentail choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables to hold the reference
var winstext = document.getElementById("wins");
var lossestext = document.getElementById("losses");
var directionstext = document.getElementById("directions");
var guessesLefttext = document.getElementById("guessesLeft");
var guessedLetterstext = document.getElementById("guessedLetters");
var computerGuesstext = document.getElementById("computerGuess");

function reset() {
    guessesLeft = 9;
    guessedLetters = [];
}

//function is run everytime when key is pressed
document.onkeyup = function (event) {

    //determines what key is pressed by the user
    var userGuess = event.key.toLowerCase();

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "s") || (userGuess === "p") || (userGuess === "r") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        //determines what choices the computer has to choose from
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // wins 
        if (userGuess === computerGuess) {
            wins++;
            computerGuesstext.textContent = computerGuess;
        } else {
            guessesLeft--;
            guessedLetters.push(userGuess);
        }

        if (guessesLeft == 0) {
            losses++;
            computerGuesstext.textContent = computerGuess;
            reset();
        }

        //hide the directions
        directionstext.textContent = "";

        //changes the counter of scores
        guessedLetterstext.textContent = userGuess;
        winstext.textContent = wins;
        lossestext.textContent = losses;
        guessesLefttext.textContent = guessesLeft;
    }
    else {
        alert("Please click okay to clear this message");
    }
}