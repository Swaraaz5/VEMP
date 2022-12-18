const mongoose = require("mongoose");

const empPhotoSchema = new mongoose.Schema({
	userid: { type: String},
	photo: { type: String},
},
{timestamps:true}
);


const EmpPhoto = mongoose.model("empphotodetails", empPhotoSchema);

module.exports = { EmpPhoto };
