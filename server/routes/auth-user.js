
const router = require("express").Router();
const {Emp} = require("../models/add-user")
// const { User } = require("../models/add-user");
const bcrypt = require("bcrypt");
const Joi = require("joi");


router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await Emp.findOne({ email: req.body.email });


		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
        
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
            
			req.session.user = user;
    		req.session.save();
			
			req.session.iduser=user.email;
			req.session.save();
			

			if(req.session.user)
			{
				// console.log(req.session.iduser);
				// next()
				res.status(201).json(req.session.user);
				// res.status(201).send({message:req.session.user});
				// res.status(200).json(user);
			}
			else{
				res.status(401).send({message:'session is not set'});

			}

	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
