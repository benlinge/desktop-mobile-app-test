/**
* Create Lectures
* 
*/
QuestionAsker.LecturesController = Ember.ArrayController.extend({
	actions: {//Actions to perform
    	createLecture: function() {//create a lecture topic function
      		var title = this.get('newTitle');//gets the new lecture title
      		var lecture = this.store.createRecord('lecture', {//Create the new lecture model
        		title: title,
      		});
      		this.set('newTitle', '');//Clear text field once inputted
      		lecture.save();//save function used to save record
    	}
  	}
});


