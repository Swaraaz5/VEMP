const mongoose = require("mongoose");


const attendanceSchema = new mongoose.Schema({
	userid: { type: String},
	date: { type: String},
	checkintime: { type: String},
	checkouttime: { type: String },
},
{timestamps:true}
);


const Emp = mongoose.model("attendancedetails", attendanceSchema);


module.exports = { Emp };
