console.log("linked");

window.onload = function() {
	console.log("load event detected");
	addListeners();
};

//game start and reset
//function gameBoard() {
	//var tileKeys = Object.keys( tileContent );
	//return tileContent[i];
//}


//need tiles to have correct question and answer content.
var tileContent  = {
	"Come stai?": "How are you?",
	"Piacere di conosciarti": "Nice to meet you.",
	"Andiamo" : "Let's go",
	"E gentile da parta sua" : "That is nice of you",
	"Ciao" : "Hello or Goodbye",
	"A presto" : "See you soon"
};
var tileValues = [];
var tileIds = [];
var tilesTurned = 0;

Array.prototype.shuffle = function () {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this [j] = this [i];
		this[i] = temp;
	}
};


function gameBoard() {
		tilesTurned = 0;
		var output = '';
	tileContent.shuffle();
		for (var i = 0; i < tileContent.length; i++) {
			output += '<div id = "tile_'+i+'" onclick = "tileFlip(this, \''+ tileContent[i] + '\')"></div>';
		}
		document.getElementById('gameBoard').innerHTML = output;
}
//output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
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
		tile.style.background = "#div# url('images/botticelli-Question.jpg') no-repeat fixed 10px 10px";
		tile.innerHTML = val;
		if (tileValues.length = 0) {
				tileValues.push(val);
				tileIds.push(tile.id);
		}
		else if (tileValues.length == 1) {
				tileValues.push(val);
				tileIds.push(tile.id);
				if (tileValues[0] == tileValues[1]) {
					tilesTurned += 2;
				//clear arrays
				tileValues = [];
				tileIds = [];
		}
		else {
			 function tileFlipBack() {
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(tileIds[0]);
				    var tile_2 = document.getElementById(tileIds[1]);
				    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    tileValues = [];
            	    tileIds = [];
		}


 //function changeBG(){
  //var element = document.getElementById('test');
  //element.setAttribute("class", 'newBG'); //For Most Browsers
  //element.setAttribute("className", 'newBG'); //For IE; harmless to other browsers.
//}
 //document.getElementById('test').style.background = "#f00 url('img/test.jpg') no-repeat fixed 10px 10px"


 //create function to flip cards back over.

				//setTimeout(tileFlipBack, 700);
				//}

//create the toggle function to change cards from front to back

//function toggleClass(el) {
	//el.className = "backQorA";
	//var tileContent = el.key;
	//gameboard[tileKeys]();
//}
//function toggleClass() {
   //var el = document.getElementById("frontImage").classList;
	 //if (el.contains(tileContent.key)) {
	   // el.remove("tileContent.key");
	// } else {
	   // el.add("tileContent.key");
	 //}
	// if (el.contains("backQorA")) {
	   // el.remove("backQorA");
	// } else {
	  //  el.add("backQorA");
 