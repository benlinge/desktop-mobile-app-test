/**
* Application Models
* Login Model commented out to stop the application from becoming complicated
*/
QuestionAsker.Lecture = DS.Model.extend({//lecture model
  	title: DS.attr('string'),//Calls lecture titles from API
  	questions: DS.hasMany('question', {async: true}),
});

QuestionAsker.Question = DS.Model.extend({
  	question: DS.attr('string'),//Calls questions from API
	lecture: DS.attr('string')//Calls lecture attribute from API of question
});


//QuestionAsker.User = DS.Model.extend({ //Login Model
  	//email: DS.attr('string'), //Calls emails from API
  	//password: DS.attr('string'), //Calls passwords from API
//});



