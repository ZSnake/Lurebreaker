import { Meteor } from 'meteor/meteor';
import { Courses } from '../imports/api/courses.js';

Meteor.startup(() => {
  // let courses = seedCourses();
  //   if(Courses.find({}).count() === 0){
  //       for(let i = 0; i < courses.length; i++){
  //           Courses.insert(courses[i]);
  //       }
  //   }
});

let seedCourses = () => {
  return [
    {
      name: 'Programacion IV',
      description: 'Programación 4'
    },
    {
      name: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    },
    {
      name: 'Programacion IV',
      description: 'Programación 4'
    },
    {
      name: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    },
    {
      name: 'Programacion IV',
      description: 'Programación 4'
    },
    {
      name: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos'
    }
  ]
}