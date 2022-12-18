const router = require("express").Router();
const { Emp } = require("../models/leave");

router.post("/leavestatusupdate/:id", async (req, res) => {
  try {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = day + "/" + month + "/" + year;

    const leavedata = await Emp.updateOne(
      { _id: req.params.id },
      {status:req.body.status,admindate:newdate} //This send data in JSON Format
    );

    res.status(201).json(leavedata);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/leavebyid/:id", async (req, res) => {
  try {
    const leavedata = await Emp.findOne(
      { _id: req.params.id },
      {} //This send data in JSON Format
    );

    res.status(201).json(leavedata);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/leaveall", async (req, res) => {
  try {
    const leavedata = await Emp.aggregate([
      {
        $lookup: {
          from: "empdetails",
          let: { pid: "$userid" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", { $toObjectId: "$$pid" }],
                },
              },
            },
          ],
          as: "empdetails",
        },
      },
      {
        $set: {
          empdetails: {
            $arrayElemAt: ["$empdetails", 0],
          },
        },
      },
    ]);
    res.status(201).json(leavedata);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/read/:id", async (req, res) => {
  try {
    const leavedata = await Emp.find(
      { userid: req.params.id },
      {} //This send data in JSON Format
    ).sort({ Date: -1 });

    res.status(201).json(leavedata);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/store", async (req, res) => {
  try {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = day + "/" + month + "/" + year;

    await new Emp({
      userid: req.body.userId,
      leavetype: req.body.leaveType,
      reason: req.body.reason,
      fromdate: req.body.fromDate,
      todate: req.body.toDate,
      userdate: newdate,
      admindate: null,
      status: "pending",
    }).save();
    res.status(201).send({ message: "Leave Added successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
