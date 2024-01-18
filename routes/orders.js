const router = require("express").Router();
const Order = require("../models/Order");



//place an Order

router.post('/', async (req, res)=>{
    const nerOrder = new Order(req.body);
    try{
        const placeOrder = await nerOrder.save();
        res.status(200).json(placeOrder)
    } catch(err){
        res.status(500).json(err);
    }
})

// get an Order

router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;