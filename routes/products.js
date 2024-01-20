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
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75`
//             ,
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75',
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75',
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },

//     {
//         name: "CLOUDFOAM PURE SHOES",
//         price: 71,
//         discountedPrice: 60,
//         colors: ["Grey Two", "Collegiate Green", "Cloud White"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//            `https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct1Maain.png%3Falt%3Dmedia%26token%3D57390b99-b996-41f8-a184-472b5c21bc90&w=640&q=75`
//             ,
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct1min.avif%3Falt%3Dmedia%26token%3Ded10ebe1-f8ab-4672-a420-b7783434c91a&w=640&q=75',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct1min2.avif%3Falt%3Dmedia%26token%3D646b21ab-54c4-4d67-ae1d-9b463c8990c3&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },

//     {
//         name: "DAILY 3.0 SHOES",
//         price: 71,
//         discountedPrice: 60,
//         colors: ["Shadow Brown ", "Preloved Brown ", " Cloud White"],
           
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=640&q=75',
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct3min.avif%3Falt%3Dmedia%26token%3De37feb31-9441-40a0-ac0c-4804f90f29bd&w=640&q=75',
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct3min2.avif%3Falt%3Dmedia%26token%3D44b07f4d-a206-46b8-82c2-6f0081321efd&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },




//     {
//         name: "Y-3 GAZELLE",
//         price: 300,
//         discountedPrice: 285,
//         colors: ["chalk white", 'blue'," Cloud White"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [

//             'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct5min.avif%3Falt%3Dmedia%26token%3Dbb233576-fa65-47dd-b23d-a6c87c56f801&w=640&q=75',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct5min2.avif%3Falt%3Dmedia%26token%3Df39d2900-80ae-47a4-b17f-376115c52d39&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },



//     {
//         name: "KAPTIR 3.0 SHOES",
//         price: 85,
//         discountedPrice: 75,
//         colors: ["Core Black  ", " Screaming Orange  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//           'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68',
//          'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct7min.avif%3Falt%3Dmedia%26token%3Dc6765dc4-e40a-469d-a46a-9dc56515f99b&w=640&q=75',
//          'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct7min2.avif%3Falt%3Dmedia%26token%3D6e185bb1-455b-4f3c-ac7e-504010275036&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },  



//     {
//         name: " KANTANA SHOES",
//         price: 90,
//         discountedPrice: 72,
//         colors: ["Chalk White", " Wonder Clay ", " Wonder Quartz"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//           'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061',
//           'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct7min.avif%3Falt%3Dmedia%26token%3Dc6765dc4-e40a-469d-a46a-9dc56515f99b&w=128&q=75',
//           'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct7min2.avif%3Falt%3Dmedia%26token%3D6e185bb1-455b-4f3c-ac7e-504010275036&w=128&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },





//     {
//         name: "ADILETTE SANDALS",
//         price: 85,
//         discountedPrice: 75,
//         colors: ["Core Black  ", " Cloud White  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
        
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct8min.avif%3Falt%3Dmedia%26token%3Dcb6ce1bf-2b48-4c23-b598-1cea5c9e4c64&w=640&q=75',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct8min2.avif%3Falt%3Dmedia%26token%3D8970eda6-5939-4053-a11b-38574ee64c39&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },






//     {
//         name: "GAZELLE SHOES",
//         price: 100,
//         discountedPrice: 80,
//         colors: ["Core Black  ", " Screaming Orange  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
        
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//         'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655',
//         'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct9min.avif%3Falt%3Dmedia%26token%3D7bc82caa-d12b-4b73-9274-158de43b76e6&w=640&q=75',
//         'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct9min2.avif%3Falt%3Dmedia%26token%3D82d666b9-8f57-4332-86e0-208c0561acf6&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },



//     {
//         name: "RUNFALCON 2.0 SHOES",
//         price: 50,
//         discountedPrice: 40,
//         colors: ["Core Black  ", "  Vision Met  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//          'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be',
//          'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct10min.avif%3Falt%3Dmedia%26token%3D7515fba4-3373-483f-9dcb-c8b89a773591&w=640&q=75',
//          'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct10min2.avif%3Falt%3Dmedia%26token%3Df92e7667-03b3-460d-afa5-88de711e0786&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },





//     {
//         name: "  ULTRABOOST 1.0 SHOES",
//         price: 140,
//         discountedPrice: 120,
//         colors: ["Core Black  ", " Screaming Orange  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
         
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct11main.avif?alt=media&token=27367286-7570-4100-babe-02a66c791ba2',
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct11min.avif%3Falt%3Dmedia%26token%3D3e462f43-f7a3-456f-b918-eac71c98bd0c&w=640&q=75',
//            'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct11min2.avif%3Falt%3Dmedia%26token%3D0c7153d9-063d-44cd-8bfc-c4643c7217d9&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },




//     {
//         name: "  ULTRABOOST 1.0 ARIZONA STATE",
//         price: 140,
//         discountedPrice: 130,
//         colors: ["Core Black  ", " Team Maroon  ", " team Colleg Gold"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
       
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct12main.avif?alt=media&token=bbeddfbb-90ce-4432-8272-55988e9eb00b',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct12min.avif%3Falt%3Dmedia%26token%3D221004da-4ca6-4c18-a246-4af43c1c6cfa&w=640&q=75',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct12min2.avif%3Falt%3Dmedia%26token%3D1231e31f-2f99-4d24-95d2-29cbca223c4f&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },





//     {
//         name: "  FORUM BONEGA SHOES",
//         price: 120,
//         discountedPrice: 100,
//         colors: ["Core Black  ", " Royal Blue", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
       
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
//             'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct13main.avif?alt=media&token=e2ff5e69-9671-4e92-8a4f-fde2564de76a',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct13min.avif%3Falt%3Dmedia%26token%3D6d0d897c-2435-4816-acea-5394608d8e3d&w=640&q=75',
//             'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct13min2.avif%3Falt%3Dmedia%26token%3D35afd712-84c6-4b6c-827d-add89cbf8837&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },





//     {
//         name: "X_PLRBOOST SHOES",
//         price: 128,
//         discountedPrice: 120,
//         colors: ["Core Black  ", " Screaming Orange  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
        
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
// 'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct14main.avif?alt=media&token=c84d6ac3-2cf9-4659-bd50-e9ff47827704',
// 'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct14min.avif%3Falt%3Dmedia%26token%3D1a49f627-00e3-4197-b6a9-0e3eacb6d8af&w=640&q=75',
// 'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct14min2.avif%3Falt%3Dmedia%26token%3D8bf8dc87-f615-4dd6-8907-e3978ae99d8d&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     },





//     {
//         name: "LITE RACER ADAPT 4.0 CLOUDFOAM SLIP-ON SHOES",
//         price:70,
//         discountedPrice: 60,
//         colors: ["Core Black  ", " Screaming Orange  ", " Shadow Olive"],
//         sizes: [
//             "UK 6",
//             "UK 6.5",
//             "UK 7",
//             "UK7.5",
//             "UK 8",
//             "UK 8.5",
//             "UK 9",
          
//             "UK 9.5",
//             "UK 10",
//             "UK 10.5",
//             "UK 11",
//             "UK 11.5",
//         ],
//         images: [
// 'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct15main.avif?alt=media&token=df4c7a51-fcb5-4a1d-952f-acb93e12b480',
// 'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct15min.avif%3Falt%3Dmedia%26token%3D83cc0c2f-f990-4a92-8fa2-8bbb86f728a4&w=640&q=75',
// 'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct15min2.avif%3Falt%3Dmedia%26token%3D7c4ac91e-9a41-46f6-91a5-da967bbf5cb4&w=640&q=75'
//         ],
//         detail: "very comfertable and soft shoes easy to wear and good for walk",
//     }
// ];


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