import './layout.html';

Template.layout.events({
    'click #signoutButton'(event){
        Meteor.logout();
    },
})