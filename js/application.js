/**
* Create Application and link to API
*/
window.QuestionAsker = Ember.Application.create({});//Create application

QuestionAsker.ApplicationAdapter = DS.RESTAdapter.reopen({//Get API
	namespace: 'api',//contains the API to use
  	host: 'http://teaching.room3b.eu/ask-the-lecturer',//Host source
  	headers: function() {//Authentication
      	auth = sessionStorage.getItem('atl-user-password');
      	return {
          	"X-Atl-Authentication": auth
      	};
  	}.property().volatile()
});

