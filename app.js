console.log("linked")

window.onload = function() {
	console.log("load event detected");
	addListeners();
};



//add event listeners to start and reset
function addListeners(){
	document.getElementById('start').addEventListener("click", startButton);
	document.getElementById('reset').addEventListener("click", resetButton);
}
// window.addEventListener("load", addListeners); 

function startButton() {
  console.log(this.id, "clicked");
}
function resetButton() {
    //console.log(this.id+" clicked");
}



//make the cell tiles
//create the flip function/
function flip(){
	document.querySelector("#myCard").classList.toggle("flip");

}

//create the sample tile arrays, back of tiles after flip

var tileQuestions = [Question1, Question2, Question3];
var tileAnswers = [Answer1, Answer2, Answer3];



//create the fronts of the tiles - 2 images

//create the content arrays. the question array and the answer array have to both 
//shuffle seperately and then combine on the board to diplay images/fronts.

//create match logic






