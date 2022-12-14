const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const passwordComplexity = require("joi-password-complexity");

const empSchema = new mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	dob: { type: String, required: true },
	gender: { type: String, required: true },
	address: { type: String, required: true },
	mobile: { type: String, required: true },
	department: { type: String, required: true },
	role: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
},
{timestamps:true}
);


const Emp = mongoose.model("empdetails", empSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstname: Joi.string().required().label("First Name"),
		lastname: Joi.string().required().label("Last Name"),
		dob: Joi.string().required().label("Date of Birth"),
		gender: Joi.string().required().label("Gender"),
		address: Joi.string().required().label("Address"),
		mobile: Joi.string().required().label("Mobile"),
		department: Joi.string().required().label("Department"),
		role: Joi.string().required().label("Role"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { Emp, validate };
