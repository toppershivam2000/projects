const User=require('../models/user');
module.exports.user=function(req,res){
    if(req.cookies.user_id)
    {User.findById(req.cookies.user_id,function(err,user){
        if(user)
        {   
            return res.render('profile',{user:user});
        }
    });
}
else
{    
return res.redirect('/user/sign-in');
}  
     
};
module.exports.signIn=function(req,res)
{
    res.render('user_sign_in',{title:"Codeidl|Sign In"});
};
module.exports.signUp=function(req,res)
{
    res.render('user_sign_up',{title:"Codeidl|Sign Up"});
};

module.exports.create=function(req,res)
{
if(req.body.password!=req.body.confirm_password)
{
    return res.redirect('back');

}
User.findOne({email:req.body.email},function(err,user){
    if(err)
    {
        console.log("Error in finding the user");
        return;
    }
    if(!user)
    {
        User.create(req.body,function(err,user){
            if(err)
            {
                console.log("Error in creating user");
                return res.redirect('/user/sign-in');
            }
            return res.redirect('back');
        });
    }
});
};
module.exports.signOut=function(req,res){
    res.cookie('user_id','',{maxAge:1});
    return res.redirect('/user/sign-in');
};
module.exports.create_session=function(req,res)
{
User.findOne({email:req.body.email},function(err,user){
    if(err)
    {
        console.log("Error in finding user");
        return;
    }
    if(user)
    {
     if(user.password!=req.body.password)
     {
         return res.redirect('back');

     }
     
     res.cookie('user_id',user.id);
     return res.redirect('back');
    }
    else
    return res.redirect('back');
});
};