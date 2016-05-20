console.log("linked");

window.onload = function() {
	console.log("load event detected");
	addListeners();
};

// var arr = [
// 	["Come stai", "How are you"], 
// 	["Piacere di conosciarti", "Nice to meet you"],
// 	["Andiamo", "Lets go"], 
// 	["E gentile da parta sua", "That is nice of you"],
// 	["Ciao", "Hello or Goodbye"],
// 	["A presto", "See you soon"],
// 	["Capisce? / Capisci?","Do you understand? (formal informal)"],
// 	["Non m'importa.", "It doesn't matter."], 
// 	["Ho fame", "I'm hungry"], 
// 	["Ho sete", "I'm thirsty."], 
// 	["Ho freddo.", "I'm cold"], 
// 	["Ho caldo", "I'm hot"]
// ];

questions = {
	"Come stai": "How are you",
	"Piacere di conosciarti": "Nice to meet you",
	"Andiamo": "Lets go",
	"E gentile da parta sua": "That is nice of you",
	"Ciao": "Hello or Goodbye",
	"A presto": "See you soon",
	"Capisce? / Capisci?": "Do you understand? (formal informal)",
	"Non m'importa.": "It doesn't matter.", 
	"Ho fame": "I'm hungry", 
	"Ho sete": "I'm thirsty.", 
	"Ho freddo.": "I'm cold", 
	"Ho caldo": "I'm hot"
};



//need tiles to have correct question and answer content.
var tileContent  = [
"Come stai?", 
"How are you?",
"Piacere di conosciarti", 
"Nice to meet you",
"Andiamo", 
"Let's go", 
"E gentile da parta sua", 
"That is nice of you", 
"Ciao", 
"Hello or Goodbye",
"A presto", 
"See you soon", 
"Capisce? / Capisci?",
"Do you understand? (formal informal)", 
"Non m'importa.", 
"It doesn't matter.", 
"Ho fame", 
"I'm hungry", 
"Ho sete", 
"I'm thirsty.", 
"Ho freddo.", 
"I'm cold", 
"Ho caldo",
"I'm hot"
];

//var italian = ["Come stai?", "Piacere di conosciarti", "Andiamo", "E gentile da parta sua", "Ciao", "A presto", 
// "Capisce? / Capisci?", "Non m'importa.", "Ho fame", "Ho sete", "Ho freddo.", "Ho caldo"];

//var english = ["How are you?", "Nice to meet you", "Let's go", "That is nice of you", "Hello or Goodbye", 
// "See you soon", "Do you understand? (formal/ informal)", "It doesn't matter.", "I'm hungry", "I'm thirsty.", "I'm cold", "I'm hot"];


var tileValues = [];
var tileIds = [];
var tilesTurned = 0;
var tileFlippedCounter = 0;
var englishCard = 0;
var italianCard = 0;

Array.prototype.shuffle = function () {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this [j] = this [i];
		this[i] = temp;
	}
};

//game start and reset
function gameBoard() {
		tilesTurned = 0;
		var output = '';
	tileContent.shuffle();
		for (var i = 0; i < tileContent.length; i++) {
			output += '<div id = "tile_'+i+'" onclick = "tileFlip(this,\'' + tileContent[i] + '\')"></div>';
		}
		document.getElementById('memory_board').innerHTML = output;
}

function startButton() {
  //console.log(this.id, "clicked");
  	gameBoard();
}

function resetButton() {
  //console.log(this.id+" clicked");
  	gameBoard();
}

//add event listeners to start and reset
function addListeners() {
	document.getElementById('start').addEventListener("click", startButton);
	document.getElementById('reset').addEventListener("click", resetButton);
}

function tileFlip(tile, val) {
	if (tile.innerHTML === "" && tileValues.length < 2) {
		//tile class to be image
		//.innerHtml to = val
		tile.style.background = 'white';
		tile.innerHTML = val;
		if (tileValues.length === 0) {
			tileValues.push(val);
			tileIds.push(tile.id);
		} else if (tileValues.length === 1) {
			tileValues.push(val);
			tileIds.push(tile.id);
			if (englishCard.innerHTML === questions[italianCard.innerHTML]) {
				tilesTurned += 2;
				//clear arrays
				tileValues = [];
				tileIds = [];

				if(tilesTurned == questions.length) {
					alert("Board cleared .. generating new board");
					document.getElementById('memory_board').innerHTML = "";
					gameBoard();
				}
			} else {
				function tileFlipBack() {
		    		// Flip the 2 tiles back over
		    		var tile_1 = document.getElementById(tileIds[0]);
		    		var tile_2 = document.getElementById(tileIds[1]);
		    		tile_1.style.background = "none";
    	    		tile_1.innerHTML = "";
		    		tile_2.style.background = "none";
    	    		tile_2.innerHTML = "";
		   			 // Clear both arrays
		    		tileValues = [];
    	    		tileIds = [];
    	    	}
				setTimeout(tileFlipBack, 1000);
			}	
	}
}
}
function checkAnswer() {
	//console.log("checkAnswer function is loading");
	document.querySelector(questions.index[0]).classList.add('italian');
	if (questions.class === "italian"); {
	//console.log(english);
	var italian = italianCard[0].innerHTML;
	//console.log(italian);
	}	if (englishCard.innerHTML === questions[italianCard.innerHTML]) {
        //console.log("There is a match.");
    } 	else {
        console.log("No match.");
        tileFlipBack();
    tileFlippedCounter = 0;
}
}


// assign cards as italian
//When a card is clicked
//  if it has class 'italian'
//    save in variable italianCard
//  else 
//    save in variable englishCard

// When two cards have been clicked
//  if we have englishCard AND italian card
//     if englishCard.innerHTML === questions[italianCard.innerHTML]
//      its correct! Leave these cards flipped 
//    else 
//      incorrect, flip back
//  else 
//    two of same language, flip back

//if (
	//if (englishCard.innerHTML === questions[italianCard.innerHTML]) {
		//return 
	//}	
	//else {

//      its correct! Leave these cards flipped 
//    else 
//      incorrect, flip back
//  else 
//    two of same language, flip back



	









