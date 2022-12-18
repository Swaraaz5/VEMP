const router = require("express").Router();
const { Emp, validate } = require("../models/add-user");
const bcrypt = require("bcrypt");

router.post("/adduser", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const emp = await Emp.findOne({ email: req.body.email });
		if (emp)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Emp({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get("/readuser", async (req, res) => {
	try {
		
		const users=await Emp.find({});
        res.status(200).json(users);

	} catch (error) {
		res.status(404).json({message:error.message});
	}
});

router.delete("/deleteuser/:id", async (req, res) => {
	try {
		
		await Emp.deleteOne({_id:req.params.id});
        res.status(201).json({message:'User Deleted Successfully'});
	

	} catch (error) {
		res.status(404).json({message:error.message});
	}
});


router.get("/finduser/:id", async (req, res) => {
	try {
		const employee=await Emp.findOne({_id:req.params.id});
		res.status(200).json(employee);
	} catch (error) {
		res.status(404).json({message:error.message});
	}
});


// router.get("/finduserwithphoto/:id", async (req, res) => {
// 	try {
// 		const employee=await Emp.findOne({_id:req.params.id});
// 		res.status(200).json(employee);
// 	} catch (error) {
// 		res.status(404).json({message:error.message});
// 	}
// });




router.post("/edituser/:id", async (req, res) => {
	let employee=req.body;
	try {
		await Emp.updateOne({_id:req.params.id},employee);
        res.status(201).json(employee);
	} catch (error) {
		res.status(404).json({message:error.message});
	}
});



module.exports = router;
