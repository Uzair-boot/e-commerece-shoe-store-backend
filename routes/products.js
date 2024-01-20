const router = require("express").Router();
const Product = require("../models/Product");
// const User = require("../models/User");



// get a post

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err)
    }
})

// get timeline posts

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
