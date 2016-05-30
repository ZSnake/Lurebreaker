Meteor.methods({
    'accounts.register'(account){
        Accounts.createUser(account, function(error){
            if(error){
                throw new exception(error);
            }else{
                return account.profile;
            }
        });
    }
})