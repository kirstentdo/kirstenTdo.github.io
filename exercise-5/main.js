
function initializeGrid() {	
	var SPACING = 10;
	var WIDTH = 15;
	var numSquaresInLevel = 26;

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;

	var LEVEL_LENGTH = (WIDTH*numSquaresInLevel + SPACING*(numSquaresInLevel - 1));

	var initialX = (SCREEN_WIDTH - LEVEL_LENGTH)/2;
	var initialY = (SCREEN_HEIGHT - LEVEL_LENGTH)/2;

	

	var numSquares = 100;
	var patternIDs = []

	for (i = 1; i <= numSquares; i++) {
		patternIDs.push(i);
	}

	var topLevel = patternIDs.slice (0,26)
	var rightSide = patternIDs.slice (26,50)
	var leftSide = patternIDs.slice (50,74)
	var bottomSide = patternIDs.slice (74,100)




	// 1) CREATE An array with numbers [1...100]
	// 2) Create the sides of the box as segments of the array


	var patternStack = [];
	var buttonStack = [];

	// topLevel.forEach(function(val, index) {
	// 	var $square = $("<div class='square'>").css({
	// 		top: initialY,
	// 		left: initialX + (index*(SPACING + WIDTH))
	// 	});

	// 	$square.click(function() {
	// 		var imagePath = "patterns/" + val + ".png"
	// 		var randX = Math.random() * 100
	// 		var randY = Math.random() * 300
	// 		var $img = $('<img class="pattern" src="' + imagePath + '">').css({
	// 			left: randX,
	// 			top: randY
	// 		}).draggable();
	// 		$('body').append($img);

	// 	});
	// 	$('body').append($square);		
	// });

	topLevel.forEach(function(val, index) {
		var $square = $("<div class='square'>").css({
			top: initialY,
			left: initialX + (index * (SPACING + WIDTH))
		});
		$square.data('image', val);

		$('body').append($square);		
	});

	leftSide.forEach(function(val, index) {
		var $square = $("<div class='square'>").css({
			top: initialY + (index*(SPACING + WIDTH)) + SPACING + WIDTH,
			left: initialX 
		});
		$square.data('image', val);

		$('body').append($square);		
	});

	rightSide.forEach(function(val, index) {
		var $square = $("<div class='square'>").css({
			top: initialY + (index*(SPACING + WIDTH)) + SPACING + WIDTH,
			left: initialX + LEVEL_LENGTH - WIDTH
		});
		$square.data('image', val);

		$('body').append($square);		
	});

	bottomSide.forEach(function(val, index) {
		var $square = $("<div class='square'>").css({
			top: initialY + (LEVEL_LENGTH - WIDTH),
			left: initialX + (index * (SPACING + WIDTH))
		});
		$square.data('image', val);

		$('body').append($square);		
	});



	$('.square').click(function() {
		var square = $(this);
		if ($(this).hasClass('colored')) {
			return;
		}
		square.addClass("colored");
		
		var image = square.data('image');

		var imagePath = "patterns/" + image + ".png"
		// width ranges from 100 to 300
		var randWidth = Math.random() * 200 + 100

		var randX = Math.random() * (LEVEL_LENGTH - randWidth - WIDTH) + (initialX + WIDTH)
		var randY = Math.random() * (LEVEL_LENGTH - randWidth - WIDTH) + (initialY + WIDTH)

		
		var $img = $('<img class="pattern" src="' + imagePath + '">').css({
			left: randX,
			top: randY,
			position: 'absolute',
			width: randWidth,
			height: randWidth
		}).draggable();
		$('body').append($img);
	
		patternStack.push($img);
		buttonStack.push(square);
	});

	$(document).keyup(function(event) {
      	if (event.keyCode == 8 || event.keyCode == 46) {
      		var pattern = patternStack.pop(); 
      		var button = buttonStack.pop();
      		button.removeClass("colored");
      		pattern.remove();
      	}
	});



}

$(document).ready(function() {
	initializeGrid();
});