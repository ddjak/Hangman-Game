var winCount = 0;
var lossCount = 0;
var numberOfGuessesStart = 11; //to make game start with 10 lives
var currentWord = "";	// sorry for the bad code, I want to keep working on this
var reset = false;
var listOfWords = ["Facebook", "Twitter", "Instagram",
				   "Whatsapp", "Snapchat", "Spotify", 
				   "Steam", "Evernote", "Chrome", "Gmail",
				   "Reddit", "Tinder", "Slack", "Lyft",
				   "Uber", "Facetime", "Netflix", "Kindle",
				   "Youtube", "Amazon"];
/*var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
				"j", "k", "l", "m", "n", "o", "p", "q", "r",
				"s", "t", "u", "v", "w", "x", "y", "z"];*/

var randomlySelectedWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
console.log(randomlySelectedWord);


function blanksGenerator() {
	for (var i = 0; i < randomlySelectedWord.length; i++){
		document.getElementById("currentWord").innerHTML += "_ ";
	}
}

blanksGenerator();
console.log(reset);
console.log(randomlySelectedWord);
document.onkeydown = function(event) {
var start = event.key;
	if (start === event.key){ 
		document.getElementById("visibility").style.visibility = "visible";
		document.getElementById("getStarted").style.visibility = "hidden";
		document.getElementById("endScreen").style.visibility = "hidden";
		numberOfGuessesStart--;
		document.getElementById("numberOfGuesses").innerHTML = numberOfGuessesStart;
		var lettersGuessed = document.getElementById("lettersGuessed");
		lettersGuessed.innerHTML += event.key + "  ";
		if (reset === true){
		lettersGuessed.style.visibility = "visible";
		}	
			if (randomlySelectedWord.includes(event.key)){
				document.getElementById("currentWord").innerHTML = event.key;
			}
				if (numberOfGuessesStart === 0){
					reset = true;
					document.getElementById("endScreen").style.visibility = "visible";
					lettersGuessed.style.visibility = "hidden";
					document.getElementById("endScreen").innerHTML = "GAME OVER - Press any key to start over"
					lossCount++;
					document.getElementById("lossCount").innerHTML = lossCount;
					numberOfGuessesStart = 11;
					
				}
	}
}


document.getElementById("winCount").innerHTML = winCount;

document.getElementById("lossCount").innerHTML = lossCount;