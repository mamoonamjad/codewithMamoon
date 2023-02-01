const authenctication = (req,res,next)=>{
const user=req.session.user;
if(!user){
    return res.redirect('/user/sign-in')
}
if(user.role!=='admin'){
    res.send("You are not authorized to view this page")
}
else{
    next();
}
}
module.exports = authenctication;