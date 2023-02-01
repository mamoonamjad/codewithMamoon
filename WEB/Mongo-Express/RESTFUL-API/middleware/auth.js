function auth(req,res,next){
    let token = req.cookies.token;
    if(!token){
        res.send("Failure")
    }
    else{
        next();
    }
}
module.exports=auth;