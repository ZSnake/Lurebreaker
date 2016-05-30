import './SignIn.html';

Template.signIn.events({
    'click #loginButton'(event){
        Meteor.loginWithPassword($('#email').val(), $('#password').val(), function(error){
            if(error){
                Materialize.toast("El correo electrónico y/o contraseña que has introducido son incorrectos.", 4000);
            }else{
                Router.go('/');
            }
        })
    }
})