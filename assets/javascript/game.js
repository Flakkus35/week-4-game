$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var currentScore = 0;
	var randomNumber = 0;
	var randomRed = 0;
	var randomBlue = 0;
	var randomGreen = 0;
	var randomPurple = 0;

	// set a reset function to use when end game condition is met
	var randomize = function() {
		currentScore = 0;
		randomNumber = Math.floor((Math.random() * 120) + 19);
		randomRed = Math.floor((Math.random() * 12) + 1);
		randomBlue = Math.floor((Math.random() * 12) + 1);
		randomGreen = Math.floor((Math.random() * 12) + 1);
		randomPurple = Math.floor((Math.random() * 12) + 1);
		$('#randomscore').text(randomNumber);
		$('#currentscore').text(currentScore);
		$('#wins').text(wins);
		$('#losses').text(losses);
	}

	// see if player wins or loses then resets game
	var compute = function() {
		$('#currentscore').text(currentScore);
		if (currentScore > randomNumber) {
			losses++;
			randomize();
		}

		else if (currentScore == randomNumber) {
			wins++;
			randomize();
		}
	}

	// initial page setup
	randomize();

	// add crystal values on click
	$('#redgem').on('click', function() {
		currentScore = currentScore + randomRed;
		compute();
	})

	$('#bluegem').on('click', function() {
		currentScore = currentScore + randomBlue;
		compute();
	})

	$('#greengem').on('click', function() {
		currentScore = currentScore + randomGreen;
		compute();
	})

	$('#purplegem').on('click', function() {
		currentScore = currentScore + randomPurple;
		compute();
	})

})