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



// let products = [
//     {
//         name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
//         price: 56,
//         discountedPrice: 50,
//         colors: ["Grey Two", "Collegiate Green", "Cloud White"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
//             "UK 11.5",
//             "UK 11.5",
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
//             ,
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },

//     {
//         name: "HOOPS 3.0 LOW CLASSIC VINTAGE SHOES",
//         price: 56,
//         discountedPrice: 50,
//         colors: ["Grey Two", "Collegiate Green", "Cloud White"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
//             "UK 11.5",
//             "UK 11.5",
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
//             ,
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75`,
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75`
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },
// ];
// //insert many

// const createDocument = async () => {
//     const result = await Product.insertMany(products);
// }
// createDocument();


// //create a post

// router.post('/', async (req, res)=>{
//     const newPost = new Post(req.body);
//     try{
//         const savedPost = await newPost.save();
//         res.status(200).json(savedPost)
//     } catch(err){
//         res.status(500).json(err);
//     }
// })
// //update a post

// router.put('/:id', async (req, res)=>{
//     try{
//         const post = await Post.findById(req.params.id);
//         if(post.userId === req.body.userId){
//             await post.updateOne({$set: req.body});
//             res.status(200).json("post updated")
//         } else{
//             res.status(403).json("you can update your post only")
//         }
//     } catch(err){
//         res.status(500).json(err);
//     }
// })

// //delete a post

// router.delete('/:id', async (req, res)=>{
//     try{
//         const post = await Post.findById(req.params.id);
//         if(post.userId === req.body.userId){
//             await post.deleteOne();
//             res.status(200).json("post deleted")
//         } else{
//             res.status(403).json("you can delete your post only")
//         }
//     } catch(err){
//         res.status(500).json(err);
//     }
// })

// // like / dislike a post

// router.put('/:id/like', async (req, res)=>{
//     try {
//         const post = await Post.findById(req.params.id);
//     if(!post.likes.includes(req.body.userId)){
//         await post.updateOne({$push: {likes: req.body.userId} });
//         res.status(200).json("Post Liked");
//     } else{
//         await post.updateOne({$pull: {likes: req.body.userId} });
//         res.status(200).json("Post Disliked");

//     }
//     } catch (err){
//         res.status(500).json(err);
//     }
// })
module.exports = router;