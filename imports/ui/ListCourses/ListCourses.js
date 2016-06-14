import './ListCourses.html';
import { Courses } from '../../api/courses.js';

Template.listCourses.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
    Meteor.subscribe('courses');
});

Template.listCourses.events({
    'click #addCourseButton'(event){
        let course = {
            name: $('#name').val(),
            description: $('#description').val(),
            owner: Meteor.user()._id
        };
        $('#name').val(""),
        $('#description').val("")
        Meteor.call('courses.insert', course)
    },
    'click .delete'() {
        Meteor.call('courses.remove', this._id);
    },
    
})
Template.listCourses.helpers({
    courses(){
        var courses = Courses.find({});
        return courses; 
    }
});