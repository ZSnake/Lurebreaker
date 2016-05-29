export const Courses = new Mongo.Collection('courses');

let Schema = {};
Schema.course = new SimpleSchema({
  name: {
    type: String,
    max: 30,
  },
  description: {
    type: String,
    max: 100,
  }
});

Courses.attachSchema(Schema.course);

Meteor.methods({
  'courses.insert'(course){
      //TODO: check if user exists
      Courses.insert(course); 
   }
})
