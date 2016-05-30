import { Router } from 'meteor/iron:router';
import { Courses } from '../api/courses.js';
import '../ui/layout/layout.js';
import '../ui/ListCourses/ListCourses.js';
import '../ui/CourseDetails/CourseDetails.js';
import '../ui/SignIn/SignIn.js';
import '../ui/SignUp/SignUp.js';
import '../ui/LandingPage/LandingPage.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  if(Meteor.user()){
    this.render('listCourses');}
  else{
    this.render('landingPage');}
});

Router.route('/course/:_id', function () {
  var course = Courses.findOne({_id: this.params._id});
  this.render('courseDetails', {data: course});
});

Router.route('/signin', function () {
  this.render('signIn');
});

Router.route('/signup', function () {
  this.render('signUp');
});


