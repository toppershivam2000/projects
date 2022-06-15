const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done)
{
    User.findOne({email:email},function(err,user){
   
        if(err)
        {
            console.log('Error in finding user-->passport');
            return done(err);
        }
        if(!user||user.password!=password)
        {
            console.log("Invalid username");
            return done(null,false);
        }
        return done(null,user);
    });
}

));
passport.serializeUser(function(user,done){
done(null,user.id)
});
passport.deserializeUser(id,function(err,user){
User.findById(id,function(err,user){
    if(err)
    {
        console.log('Error in finding user-->passport');
            return done(err);
    }
    return done(err,user);
});
});
module.exports=passport;