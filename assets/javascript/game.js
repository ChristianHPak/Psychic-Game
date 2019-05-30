alert("javscript is connected");
// variables and counters
var wins = 0;
var losses = 0;
var guessesleft = 9;

//array of potentail choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables to hold the reference
var winstext = document.getElementById("wins");
var lossestext = document.getElementById("losses")
var directionstext = document.getElementById("directions")
var guesseslefttext = document.getElementById("guessesLeft")
var userGuesstext = document.getElementById("userGuess")
var computerGuesstext = document.getElementById("computerGuess")

//function is run everytime when key is pressed
document.onkeyup = function (event){
    console.log(event);
    //determines what key is pressed by the user
    var userGuess = event.key;
    console.log(event.key);
    //determines what choices the computer has to choose from
    var computerguess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if(userguess === computerguess){
        win++;
    }else{
        guessesleft--;
    }

    if(guessesleft = 0){
        losses++;
    }else{
        wins++;
    }

    //hide the directions
    directionstext.textContent = " ";

    //changes the counter of scores
    winstext.textContent = wins;
    lossestext.textContent = losses;
    guesseslefttext.textContent = guessesleft;
    userGuesstext.textContent = userGuessed;
    computerlGuesstext.textContent = computerGuess;
}