/*=============================================
=            Variables          =
=============================================*/
var width = 10;
var height = 10;
var color = 'red';


/*=============================================
=            Functions          =
=============================================*/

var main = function() {
	makeBoxes();
	colorize();
	resetColors();
	newBoard();
	chooseColor();
};


//First removes all boxes, and then creates new grid based off width/height
var makeBoxes = function() {
	$('.sketchbox').remove();
	$('.container-sketch br').remove();
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			$('.container-sketch').append('<div class="sketchbox"></div>');
		}
		$('.container-sketch').append('<br>');
	}
};

//Function that colorizes a sketch box upon hover, based on var color
var colorize = function() {
	$('.sketchbox').on( "mouseover", function() {
		if (color === 'random') {
			var randomRed = Math.floor(Math.random() * 255);
       		var randomGreen = Math.floor(Math.random() * 255);
        	var randomBlue = Math.floor(Math.random() * 255);
        	$(this).css('background-color', 'rgb(' + randomGreen + ',' + randomBlue + ',' + randomRed + ')');
		} else {
			$(this).css('background-color', color);
		}
	});
};

//Click Reset, set all grid boxes to white
var resetColors = function() {
	$('.button-reset').click(function() {
		$('.sketchbox').css('background-color', 'white');	
	});
};

//Prompt user for new board dimensions, then call makeBoxes() to actually do it
var newBoard = function() {
	$('.button-new-board').click(function() {
		width = prompt("Please enter width (# of columns)", "10");
		height = prompt("Please enter height (# of rows)", "10");
		makeBoxes();
		colorize(); //if I don't include colorize again, mouse over doesn't change color!
	});
};

var chooseColor = function() {
	$('.container-color').children().click(function() {
		color = this.className.replace('colorbox ', '');
		//The class name follows pattern: 'colorbox <color>' i.e. 'colorbox red'
		//I only want the <color> part, the replace() function does that.
	});
}

$(document).ready(main);