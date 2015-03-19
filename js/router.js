/**
* Application router
* Login route removed to keep application functional
*/
QuestionAsker.Router.map(function() {//Main route now the lecture page (was the login page)
	this.resource('lectures', { path: '/' }, function () {//Route to lectures page	
		this.route('active');//This is set to active to use as home page
  	});
	this.resource('lecture', { path: ':lecture_id'});//To get id of lectures for paramter
  	this.resource('questions', function () {//Route to lectures page
		this.route('new');//Will open as new route
	});
});
/**
* Application routes
* Login route removed to keep application functional
*/
QuestionAsker.LecturesRoute = Ember.Route.extend({//Questions route
	model: function() {
		return this.store.find('lecture');//Returns questions data from api to be used all lecture list
	}
});
QuestionAsker.QuestionsRoute = Ember.Route.extend({//Questions route
	model: function() {
		return this.store.find('question');//Returns questions data from api to be used all lecture list
	}
});

	
	
