console.log("linked");

window.onload = function() {
	console.log("load event detected");
	addListeners();
};

//add event listeners to start and reset
function addListeners(){
	document.getElementById('start').addEventListener("click", startButton);
	document.getElementById('reset').addEventListener("click", resetButton);
	
}
//shuffle the key of the object
function gameBoard(){
	document.getElementById(tileid);
	var randomTile = tileContent.key[Math.floor(Math.random() * tileContent.length)];
}
//stop
function startButton() {
  //console.log(this.id, "clicked");
  	gameBoard();
}
function resetButton() {
  //console.log(this.id+" clicked");
  	gameBoard();
}
//arrange tiles in random order with the correct question and answers pairs on grid

//create the toggle function to change cards from front to back


function toggleClass(el) {
	el.className = "backQorA";
	//var tileid = el.id;
	//gameboard[tileid]();
}


var tileContent  = {
	"Come stai?": "How are you?",
	"Piacere di conosciarti": "Nice to meet you.",
	"Andiamo" : "Let's go",
	"E gentile da parta sua" : "That is nice of you",
	"Ciao" : "Hello or Goodbye",
	"A presto" : "See you soon"
};


//if no match toggle back, 
//else if match, listen for click again


//create the sample tile arrays, back of tiles after flip


// .splice

//need tiles to have correct question and answer content.
//create the content arrays. the question array and the answer array have to both 
//shuffle seperately and then combine on the board to diplay images/fronts.







//create match logic






