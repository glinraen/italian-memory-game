# italian-memory-game

##Description

This repository holds the files for a simple concentration-style game that renders in the web browser. 

Planned features include click a tile and get a phrase in English or Italian, try to get a match by clicking another tile. Continue 
to click pairs until the board tiles are all face-up. That is a win. There are two buttons, Start and Reset. 

[User Stories and Planning]: https://trello.com/b/AVnAf7Fh/project-1-teach-yourself-italian

Not in this version, are "switch background" and a "switch deck of tile" buttons to add to the user experience.

It teachs simple Italian by matching the tiles with the Italian phrase that correlate to the English translation, which is the corresponding correct answer.

##Technologies

It uses HTML, Javascript, and CSS for the game board.

The game board is generated with random content, when the Start or Reset button is clicked, allowing a new grid to be displayed every time Start or Reset butttons are clicked. 

The game starts with a blank grid. To play, simple navigate to (url), and click Start. When all tiles are face up, you have learned some basic Italian and won the game. Click Reset button to clear the board and play again. 

##Bugs and Fixes

* 1: Currently, I am in the process of fixing the matching logic. 
* 2: Reset button clears board, but page has to reload to generate new game board. 
* 3: Add nav bar with Switch background and switch deck button
