$(document).ready(function() {

    var questionCounter = 0;
    var time = 15;
    var correctGuesses = 0;
    var incorrectGuesses = 0;

    var questions = [
      {
	    question: "Who is the main character of Uncharted?",
	    choices: ["Nathan Drake", "Francis Drake", "Master Chief", "Lara Croft"],
	    correctAnswer: "Nathan Drake",
	    image: "<img src='assets/images/nathanDrake.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "What is the name of the protagonist in the game Tomb Raider?",
	    choices: ["Cortana", "Lara Croft", "Nathan Drake", "Kitana"],
	    correctAnswer: "Lara Croft",
	    image: "<img src='assets/images/laraCroft.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "What is the name of the world upon which World of Warcraft takes place?",
	    choices: ["Hoth", "Azeroth", "Middle Earth", "Forgotten Realms"],
	    correctAnswer: "Azeroth",
	    image: "<img src='assets/images/wow.jpg' class='img-circle shadow'>"
	  }, 
	  {
	    question: "Dr. Light is the creator of which classic videogame character?",
	    choices: ["Mario", "Sonic the Hedgehog", "Mr Game & Watch", "Mega Man"],
	    correctAnswer: "Mega Man",
	    image: "<img src='assets/images/Megaman.png' class='img-circle shadow'>"
	  }, 
	  {
	    question: "What is the highest grossing arcade game of all time?",
	    choices: ["Galaga", "Tetris", "Pacman", "Space Invaders"],
	    correctAnswer: "Pacman",
	    image: "<img src='assets/images/pacMan.png' class='img-circle shadow'>"
	  },
	  {
	    question: "Which character from The Witcher is known as The Lady of Space and Time?",
	    choices: ["Yennefer of Vengerberg", "Ciri", "Triss Merigold", "Keria Metz"],
	    correctAnswer: "Ciri",
	    image: "<img src='assets/images/ciri.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "The Vault Dweller is the protagonist of which video game?",
	    choices: ["Fallout", "Last Shelter", "Apocalypse Now", "Adventures in Rat Town"],
	    correctAnswer: "Fallout",
	    image: "<img src='assets/images/VaultBoy.png' class='img-circle shadow'>"
	  },
	  {
	    question: "Doctor Ivo Robotnik is the enemy of which video game character?",
	    choices: ["Master Chief", "Spider-Man", "Mario", "Sonic the Hedgehog"],
	    correctAnswer: "Sonic the Hedgehog",
	    image: "<img src='assets/images/sonic.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "Who is the protagonist of Nintendo's franchise often set in the Kingdom of Hyrule?",
	    choices: ["Zelda", "Mario", "Donkey Kong", "Link"],
	    correctAnswer: "Link",
	    image: "<img src='assets/images/link.png' class='img-circle shadow'>"
	  },
	  {
	    question: "Which game is most likely to never come out?",
	    choices: ["Half Life 3", "Half Life 3", "Half Life 3", "Half Life 3"],
	    correctAnswer: "Half Life 3",
	    image: "<img src='assets/images/halfLife.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "Joel and Ellie are two companions in what video game?",
	    choices: ["Dragon Quest VIII", "Final Fantsay XIII", "The Last of Us", "Dragon Age: Origins"],
	    correctAnswer: "The Last of Us",
	    image: "<img src='assets/images/lastOfUs.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "Cloud Strife is the mercenary main character of which video game?",
	    choices: ["Final Fantasy 7", "Final Fantasy 8", "Star Ocean", "Battle Quest"],
	    correctAnswer: "Final Fantasy 7",
	    image: "<img src='assets/images/Cloud.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "Which famous game mentor says 'Hello, my friend.  Stay awhile and listen'? ",
	    choices: ["Gandalf", "Deckard Cain", "Yoda", "Dumbledore"],
	    correctAnswer: "Deckard Cain",
	    image: "<img src='assets/images/Cain.jpg' class='img-circle shadow'>"
	  },
	  {
	    question: "What are the professions of Mario?",
	    choices: ["All of the Above", "Doctor", "Carpenter", "Plumber"],
	    correctAnswer: "All of the Above",
	    image: "<img src='assets/images/Mario.png' class='img-circle shadow'>"
	  },
	  {
	    question: "Which of these characters said 'Do or do not, there is no try'?",
	    choices: ["Yoda", "Yogurt", "Yo Gabba Gabba", "Yeezy"],
	    correctAnswer: "Yoda",
	    image: "<img src='assets/images/Yoda.jpg' class='img-circle shadow'>"
	  }];
	  

	function questionContent() {
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "High Score! Enter your initials!";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Yes, good!  MmmMMMmm! But do better you can...";
		}
		else {
			var endMessage = "Back to you for the sports, Ken.";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		gameReset();
		$("#start").click(nextQuestion);
	}

	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	}

	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
		questionContent();
    	timer();
    	userTimeout();
    }

    $("#start").click(nextQuestion);

	$("#gameScreen").on("click", ".choices", (function() {
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});