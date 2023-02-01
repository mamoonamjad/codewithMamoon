const multer = require('multer');

const Storage = multer.diskStorage({
destination:'public/images',
filename:(req,file,cb)=>{
    cb(null,file.originalname)}
});

const uploads =multer({
    storage:Storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=='image/jpeg'||file.mimetype=='image/png'){
            cb(null,true);
        }else{
            cb(null,false);
        }
    }
    
})
module.exports=uploads;