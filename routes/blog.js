const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');
const Video = require('../models/upload');
const { isLoggedIn } = require('../middleware');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

// Setting up multer for file upload
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });

// const upload = multer({ storage: storage })



router.post("/single", upload.single("image"), async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result)
      // Create new user
      let video = new Blog({
        name: req.body.name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
      });
    //   Save user
      await video.save();
    //   res.json(video);
    res.redirect('/')
    } catch (err) {
      console.log(err);
    }
  });

// Display all the products
router.get('/blog', async(req, res) => {
    
    const blogs=await Blog.find({});

    res.render('blogs/index',{blogs});
})


// Get add form
router.get('/new', (req,res)=>{
    res.render('blogs/new');
})

// Add new blog
// router.post('/single',  upload.single('blog[img]'), async(req,res)=>{
//     try{
//         await Blog.create(req.body.blog);
//         res.redirect('/');
//     }catch(err) {
//     res.send(400);
//   }
// })


// Show one blog
router.get('/blog/:id', isLoggedIn ,async(req, res) => {
    try{
        const blog=await Blog.findById(req.params.id).populate('reviews');;
        res.render('blogs/show', { blog });
    }
    catch(e){
            console.log("Something Went Wrong");
            // res.redirect('/error');
    }

})

// Get edit form

router.get('/blog/:id/edit', async(req, res) => {

    const blog=await Blog.findById(req.params.id);

    res.render('blogs/edit',{blog});
})

// Upadate the particular blog
router.patch('/blog/:id', async(req, res) => {
    
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);

    res.redirect(`/blog/${req.params.id}`)
})


// Delete blog
router.delete('/blog/:id', async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/');
})



// Add review
router.post('/blog/:id/review', async (req, res) => {
    
    const blog = await Blog.findById(req.params.id);
    const review = new Review({
        user: req.user.username,
        ...req.body
    });
    // console.log(review);

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blog/${req.params.id}`);
})

module.exports = router;