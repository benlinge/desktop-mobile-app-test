window.QuestionAsker = Ember.Application.create({});

QuestionAsker.ApplicationAdapter = DS.RESTAdapter.reopen({
	namespace: 'api',
  	host: 'http://teaching.room3b.eu/ask-the-lecturer',
  	headers: function() {
      	auth = sessionStorage.getItem('atl-user-password');
      	return {
          	"X-Atl-Authentication": auth
      	};
  	}.property().volatile()
});