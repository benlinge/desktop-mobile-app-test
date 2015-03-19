/**
* Create Login Authentication
* !Unfunctional Code
*/
QuestionAsker.LoginController = Ember.Controller.extend({

	login: function() {//login function to perform
    	$.post('/login', {//create a login post
      		email: this.get('email'),//get email field
      		password: this.get('password')//get password field
    	})
		.then(function() {//link to Lectures page
      		document.location = '/lectures';
    	}, 
		function() {//or Error Message 
      		this.set('loginFailed', true);//runs feedback alert shown in template
    	}
	.bind(this));
  	}
});