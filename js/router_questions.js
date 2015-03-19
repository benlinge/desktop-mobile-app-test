QuestionAsker.Router.map(function() {
	this.resource('questions', { path: '/' }, function () {
    
	this.route('active');
  });
});

QuestionAsker.QuestionsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('question');
	}
});
	