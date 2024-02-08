const router = require("express").Router();
const Appointment = require("../models/Appointment");
const User = require("../models/User");
const { convertDateFormat } = require("./shared");

// const Product = require("../models/Product")

// place an Appiontment

const alphabets = "ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");
const generateRandomString = (length) => {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += alphabets[Math.floor(Math.random() * alphabets.length)];
  }
  return string;
};
const generateRandomNumbers = (length) => {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += Math.floor(Math.random() * 10);
  }
  return string;
};

// place an Appointment
router.post("/", async (req, res) => {
  let serialNo = generateRandomNumbers(2) + generateRandomString(2);
  const AppiontmentCount = await Appointment.countDocuments();
  serialNo += AppiontmentCount + 1 + generateRandomString(2);

  const appiontment = {
    patientId: req.body.patientId,
    appiontmentDate: convertDateFormat(req.body.appiontmentDate),
    subtotal: req.body.subtotal,
    side: req.body.side,
    clickedPoints: req.body.clickedPoints,
    status: req.body.status,
    serialNo: serialNo,
    discount: req.body.discount,
    discountReason: req.body.discountReason,
  };

  const newAppiontment = new Appointment(appiontment);

  try {
    // if (req.body.discount) {
    // verify adminKey
    // adminKey: req.body.adminKey,
    // }
    const placeAppiontment = await newAppiontment.save();
    res.status(200).json(placeAppiontment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get Single Appiontment

router.get("/:id", async (req, res) => {
  try {
    const appiontment = await Appointment.findById(req.params.id);
    res.status(200).json(appiontment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get patient's appiontments
router.get("/patientAppiontments/:id", async (req, res) => {
  try {
    const patAppointments = await Appointment.find({
      patientId: req.params.id,
    }).populate({
      path: "patientId",
      model: User,
      select: "patientName contact address",
    });
    res.status(200).json(patAppointments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all on the basis of dates appiontments
router.get("/", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    // Convert startDate and endDate to Date objects
    const startDateObj = convertDateFormat(startDate);
    const endDateObj = convertDateFormat(endDate);

    // Find appointments between startDate and endDate
    const appointments = await Appointment.find({
      appiontmentDate: {
        $gte: startDateObj,
        $lte: endDateObj,
      },
    }).populate({
      path: "patientId",
      model: "User",
      select: "patientName contact address",
    });

    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
