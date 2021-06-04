const mongoose = require('mongoose');
const Review = require('./review');

const blogSchema= new mongoose.Schema({
    title: {
        type:String,
        // required:true,
    },
    author: {
        type:String,
    },
    img:{
        type:String,
    },
    text:{
        type:String,
    },
    name: {
        type: String,
      },
        avatar: {
        type: String,
      },
      cloudinary_id: {
        type: String,
      },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

})


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;