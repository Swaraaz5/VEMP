const router = require("express").Router();
const {Emp} = require("../models/emp-attendance")

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
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();


    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes < 10 ? '0'+minutes : minutes;

    var strTime = hours + ':' + minutes + ':' + seconds ;

		await Emp.updateOne({userid:req.params.id},{checkouttime:strTime});

    res.status(201).send({ message: "Checked Out Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
