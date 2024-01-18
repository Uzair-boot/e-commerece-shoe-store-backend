const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");



//REGISTER A NEW USER
router.post("/signup", async (req, res) => {
    try {
        // generate encrypted password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            postalCode: req.body.postalCode,
        })

        //save user to database and get response
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        console.log(err);

    }
});

// LOGIN
router.put("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User not found")

        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        !validatePassword && res.status(400).json("wrong Password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);

    }
})

module.exports = router;