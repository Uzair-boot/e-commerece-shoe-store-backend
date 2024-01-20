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

// const updateProducts = async () => {
//   try {
//     const products = await Product.find();

//     for (const [index, product] of products.entries()) {
//       if ((index + 1) % 15 === 0) {
//         product.category = "Gucci";
//       } else if ((index + 1) % 3 === 0) {
//         product.category = "Adidas";
//       } else if ((index + 1) % 5 === 0) {
//         product.category = "Nike";
//       } else {
//         product.category = "Bata";
//       }

//       await product.save();

//       console.log(product);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// updateProducts();
module.exports = router;
