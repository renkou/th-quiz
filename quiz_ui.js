var QuizUI = {
	score: 0,
	currentQuestion: 1,
	init: function() {
		//show question
		this.showQuestion();
		//show choices
		this.showChoices();
		//display what question user is on
		this.showProgress();
		//select answer
		//check if answer correct after selected
			//if correct show next question
			//else end game
				//show gameover and score
	},

	showQuestion: function(questionNumber) {
		if(!questionNumber){
			questionNumber = 0;
		}
		var populateID = document.getElementById('question');
		populateID.innerHTML = quiz.questions[questionNumber].text;
	},

	showChoices: function() {
		var questionSet = quiz.questions;
		questionSet.forEach(function(question) {
			//goes through each question
			var choiceSet = question.choices;
			choiceSet.forEach(function(choices, index, arr) {
				//goes through each choice
				var valueOfSelectedChoice = quiz.questions[index].choices[index];
				var displayChoice = document.getElementById('choice' + index);
				displayChoice.innerHTML = valueOfSelectedChoice;
				var buttonID = 'guess' + index;
				QuizUI.guessHandler(buttonID, valueOfSelectedChoice);
			})
		})
	},

	showProgress: function() {
		var questionSet = quiz.questions;
		questionSet.forEach(function(question, index, arr) {
			var questionTracker = document.getElementById('progress');
			var progressHTML = 'Question ';
			progressHTML += QuizUI.currentQuestion;
			progressHTML += ' of ';
			progressHTML += arr.length;

			questionTracker.innerHTML = progressHTML;

		})
	},

	guessHandler: function(buttonID, valueOfSelectedChoice) {
		var button = document.getElementById(buttonID);
		button.onclick = function(event) {
			event.preventDefault();
			QuizUI.checkAnswer(valueOfSelectedChoice);
		}
		
	},

	checkAnswer: function(valueOfSelectedChoice) { 
		var answer = quiz.questions[QuizUI.score].answer;

	
		if(valueOfSelectedChoice === answer) {
			QuizUI.score++;
			QuizUI.currentQuestion++;
			if(QuizUI.currentQuestion <= quiz.questions.length){
				QuizUI.showProgress();
				QuizUI.showQuestion(QuizUI.score);
			} else {
				QuizUI.hideQuiz();
			}
		} else {
			QuizUI.hideQuiz();
		}
	},

	hideQuiz: function() {
		var quizDiv = document.getElementById('quiz');
		var gameOverDiv = document.getElementById('gameover');
		quizDiv.style.display = 'none';
		this.gameOverScreen();
		gameOverDiv.style.display = 'block';
	},

	gameOverScreen: function() {
		var endScoreDiv = document.getElementById('endScore');
		var tellScore = 'You scored ' + QuizUI.score;
		tellScore += ' out of ' + quiz.questions.length + ' question(s) correct!';
		endScoreDiv.innerHTML = tellScore;

		var retryButtonID = document.getElementById('retry');
		retryButtonID.onclick = function(e) {
			e.preventDefault();
			QuizUI.restartQuiz();
		}
	},

	restartQuiz: function() {
		var self = this;
		
		var quizDiv = document.getElementById('quiz');
		var gameOverDiv = document.getElementById('gameover');
		self.score = 0;
		self.currentQuestion = 1;

		gameOverDiv.style.display = 'none';
		quizDiv.style.display = 'block';
		self.init();

		
	},

	createRetryButton: function() {
		var gameOverDiv = document.getElementById('gameover');
		gameOverDiv.style.display = 'none';
		var h1 = document.createElement('h1');                // Create a <h1> element
		var h2 = document.createElement('h2');
		h2.setAttribute('id', 'endScore');
		var gameOverTextNode = document.createTextNode('Game Over!');     // Create a text node

		h1.appendChild(gameOverTextNode);
		gameOverDiv.appendChild(h1);
		gameOverDiv.appendChild(h2);

		var createButton = document.createElement('button');
		createButton.setAttribute('id', 'retry');
		var buttonTextNode = document.createTextNode('Retry?');
		createButton.appendChild(buttonTextNode);
		gameOverDiv.appendChild(createButton);
	}
}










