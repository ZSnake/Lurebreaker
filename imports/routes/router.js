import { Router } from 'meteor/iron:router';
import { Courses } from '../api/courses.js';
import '../ui/layout/layout.js';
import '../ui/ListCourses/ListCourses.js';
import '../ui/CourseDetails/CourseDetails.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('listCourses');
});

Router.route('/course/:_id', function () {
  var course = Courses.findOne({_id: this.params._id});
  this.render('courseDetails', {data: course});
});



