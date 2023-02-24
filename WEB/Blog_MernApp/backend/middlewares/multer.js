const multer = require('multer')

const Storage = multer.diskStorage({
    destination:'public/images',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:Storage,
    fileFilter:(req,file,cb)=>{
        //Check to see the image type
        if(file.mimetype =='image/jpeg' || 
        file.mimetype=='image/png' ||
         file.mimetype=='image/jpg'){
            cb(null,true) 
         }
         else{
            cb(null,false)
         }
    }
})
module.exports = upload;