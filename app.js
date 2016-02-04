//Create Questions
var questions = [
new Question('Press the button for 1', ['1', '2'], '1'),
new Question('Press the button for 2', ['1', '2'], '2')
];

//Create Quiz
var quiz = new Quiz(questions);
//Display Quiz
QuizUI.init();
QuizUI.createRetryButton();


///////////////////////////////////////////////////

//dot notation: object.first, returns 1
//object notation: object["first"]



/*var family = [
	{
		name: 'John',
		age: 24
	},

	{
		name: 'Tony',
		age: 23
	}
]

var fullName = family.map(function (person, index, arr) {
	// person = { name: 'John' }
	var newName = person.name + ' Doe';

	return {
		name: newName,
		age:  person.age
	};

})*/