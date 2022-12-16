const mongoose = require("mongoose");


const leaveSchema = new mongoose.Schema({
	userid: { type: String },
	leavetype: { type: String },
	reason: { type: String },
	fromdate: { type: String },
	todate: { type: String },
	userdate: { type: String },
	admindate: { type: String },
	status: { type: String },
}
);


const Emp = mongoose.model("leavedetails", leaveSchema);

module.exports = { Emp };
