import './ListCourses.html';
import { Courses } from '../../api/courses.js';

Template.listCourses.onRendered(function(){
    $('.modal-trigger').leanModal();
});

Template.listCourses.events({
    'click #addCourseButton'(event){
        let course = {
            name: $('#name').val(),
            description: $('#description').val()
        };
        $('#name').val(""),
        $('#description').val("")
        Meteor.call('courses.insert', course)
    }
})
Template.listCourses.helpers({
    courses(){
        var courses = Courses.find({});
        return courses; 
    }
});