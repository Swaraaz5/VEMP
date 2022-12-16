const router = require("express").Router();
const {Emp} = require("../models/emp-attendance")

//Read All Check In and Check Out records By ID
router.get("/read/:id",async(req,res)=>{
  
  try {
    const attendance=await Emp.find(
      {userid:req.params.id},
      {} //This send data in JSON Format
      ).sort({Date:-1});
      
      console.log("Data data data astdadasd "+attendance);
    res.status(201).json(attendance)
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

//Read If user checkin record is present in table or not
router.get("/read/checkin/:id",async(req,res)=>{
  try {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = day + "/" + month + "/" + year;

    const attendancecheckin=await Emp.find({userid:req.params.id,date:newdate},
      {}
      );
    res.status(201).json(attendancecheckin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})



//Read If user checkout record is present in table or not
router.get("/read/checkout/:id",async(req,res)=>{
  try {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = day + "/" + month + "/" + year;

    const attendancecheckout=await Emp.find({userid:req.params.id,date:newdate,checkouttime:null},
      {}
      );
    res.status(201).json(attendancecheckout);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})



router.post("/", async (req, res) => {
  try {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = day + "/" + month + "/" + year;


    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();

    // var ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    minutes = minutes < 10 ? '0'+minutes : minutes;

    var strTime = hours + ':' + minutes + ':' + seconds ;

    // console.log('todays date '+newdate);
    // console.log('todays time '+strTime);

    await new Emp({...req.body,date:newdate,checkintime:strTime,checkouttime:null}).save();
    res.status(201).send({ message: "Checked In Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


//Checkout Route
router.post("/checkout/:id", async (req, res) => {
  try {


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = day + "/" + month + "/" + year;


    var dateObj = new Date();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();


    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes < 10 ? '0'+minutes : minutes;

    var strTime = hours + ':' + minutes + ':' + seconds ;

		await Emp.updateOne({userid:req.params.id,date:newdate},{checkouttime:strTime});

    res.status(201).send({ message: "Checked Out Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
