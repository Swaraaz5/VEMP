const router = require("express").Router();
const multer = require('multer')
const {v4:uuidv4}=require('uuid');
const path=require('path');
const { EmpPhoto } = require("../models/add-user-photo");


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images');
    },
    filename:function(req,file,cb){
        cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname));
    }
});

const fileFilter=(req,file,cb)=>{
    const allowedFileTypes=['image/jpeg','image/jpg','image/png'];

    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

let upload=multer({storage,fileFilter})

router.route('/').post(upload.single('photo'),async (req,res)=>{

    const userid=req.body.userid;
    const photo=req.file.filename;

    const newUserData={
        userid,
        photo
    }

    const newUser=new EmpPhoto(newUserData);

    newUser.save()
            .then(()=>res.json('User Photo Added'))
            .catch(err=>res.status(400).json('Error : '+err));

})

// router.post("/", async (req, res) => {
//   try {

//     await new EmpPhoto({ ...req.body}).save();
//     res.status(201).send({ message: "User created successfully" });

//   } 
//   catch (error) 
//   {
//     res.status(500).send({ message: error.message });
//   }
// });

module.exports = router;
