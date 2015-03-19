/**
* Filter questions by lecture
* 
*/
QuestionAsker.FilterController = Ember.ArrayController.extend({
  	questions: [],//array of questions
  	questionFilter: (function() {//filter function created
    	this.get('questions').filterProperty('lecture', 'number');//Gets the lecture and its number from questions array in API
  	}).property('questions.@each.lecture')//loops for each question untill all of same lecture number is shown
});

/**
* Create Question
* 
*/
QuestionAsker.QuestionsController = Ember.ArrayController.extend({
  	actions: {//Actions to perform
    	createQuestion: function() {//create a question function
      		var question = this.get('newQuestion');//gets the new lecture inputted
      		var question = this.store.createRecord('question', {//Create the new question model
        		question: question,
      		});
      		this.set('newQuestion', '');//Clear text field once inputted
           	question.save();//save function used to save record
    	}
  	}
});