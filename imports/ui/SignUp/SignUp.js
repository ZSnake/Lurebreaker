import './SignUp.html';
import { Material } from 'meteor/materialize:materialize';

Template.signUp.events({
    'click #registerButton'(event){
        let profile = { 
            firstName: $('#firstname').val(),
            lastName: $('#lastname').val(),
        }
        let user = {
            username: $('#email').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            profile: profile
        }
        Accounts.createUser(user, function(error){
            if(error){
                Materialize.toast('User already exists');
            }else{
                Router.go('/');
            }
        });
    }
});