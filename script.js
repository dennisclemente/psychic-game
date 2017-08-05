var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessesSoFar = [];
  var userGuess = null;
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("this is our letter", letterToBeGuessed);
	
document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	if (letterToBeGuessed === userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

	}
		if (guessesLeft === 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
}	
		document.getElementById('wins').innerHTML = "wins: " + wins;
	    document.getElementById('losses').innerHTML = "losses: " + losses;
	    document.getElementById('guesses').innerHTML = "guesses left: " + guessesLeft;
	    document.getElementById('guessesSoFar').innerHTML = "guessesSoFar: " + guessesSoFar;

}