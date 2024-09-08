const User=require("../models/user.js");
module.exports.signup=async(req,res,next)=>{
    try{
    let {username,email,password}=req.body;
    const newUser=new User({username,email});
    const registeredUser=await User.register(newUser,password);
    req.login(registeredUser,(err)=>{
if(err){
    return next(err);

}

    req.flash("success","welcome to wanderlust");
    res.redirect("/listings");
    
});
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");


    }

}
module.exports.renderSignupform=(req,res)=>{
    res.render("users/signup.ejs");

};
module.exports.renderLoginform=(req,res)=>{
    res.render("users/login.ejs");

}
module.exports.Login=async(req,res)=>{
    req.flash("success","welcome back to wanderlust")
    let redirectUrl=res.locals.redirectUrl||"/listings"
    res.redirect(redirectUrl);  
    }
  module.exports.Logout=(req,res,next)=>{
    req.logout((err)=>{
if(err){
    return next(err);
}
req.flash("success","logged you out!");
res.redirect("/listings");
    });
}