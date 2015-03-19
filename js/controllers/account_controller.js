/**
* Create Account Authentication
* !Unfunctional Code
*/
QuestionAsker.createController = Ember.Application.create();//Create user

QuestionAsker.IndexController = Ember.ObjectController.extend({
  	actions: {//Actions to perform
    	createUser: function() {//create a user function once submitted
      		alert("Account Created");//User feedback alert
    	},
  	}
});

QuestionAsker.UserFormComponent = Ember.Component.extend({
  	actions: {//Actions to perform
    	submit: function() {//send details function
      		this.sendAction('submit', {//after submit buttons clicked
        		email: this.get('email'),//send email from input box
				password: this.get('password'),//send password from input box
      		});
    	},
  	}
});