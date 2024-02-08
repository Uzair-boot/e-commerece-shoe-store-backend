const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER A NEW USER
router.post("/signup", async (req, res) => {
  try {
    // generate encrypted password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User(req.body);

    //save user to database and get response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Edit user

// Route to edit a user by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    Object.assign(existingUser, userData);

    // Save the updated user
    const updatedUser = await existingUser.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// LOGIN
router.put("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found");

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validatePassword && res.status(400).json("wrong Password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single User

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all Users

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    // const populatedOrders = await Promise.all(
    //     orders.map(async (order) => {
    //         const populatedItems = await Promise.all(
    //             order.items.map(async (item) => {
    //                 const product = await Product.findById(item.productId);
    //                 return {
    //                     ...item.toObject(),
    //                     product: product.toObject(),
    //                 };
    //             })
    //         );

    //         return {
    //             ...order.toObject(),
    //             items: populatedItems,
    //         };
    //     })
    // );

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete patient

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Patient Record Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
