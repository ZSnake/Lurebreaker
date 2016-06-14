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
  }, 
  owner: {
    type: SimpleSchema.RegEx.Id
  }
});

Courses.attachSchema(Schema.course);

Meteor.methods({
  'courses.insert'(course){
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
      Courses.insert(course, function(err){
        if(err)
          throw new Meteor.Error('Error inserting course: ' + err);
      }); 
   },
   'courses.remove'(_id){
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
     Courses.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing course: ' + err);
     });
   }
});


if (Meteor.isServer) {
  Meteor.publish('courses', function coursesPublication(){ 
   return Courses.find({owner: this.userId});
  });  
}
