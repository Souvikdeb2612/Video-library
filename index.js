  

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
// const seedDB= require('./seed');
const dotenv = require("dotenv");
const methodOverride = require('method-override');
const Blog = require('./models/blog');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const multer = require('multer');


dotenv.config();
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



const blogRoutes=require('./routes/blog'); 
const authRoutes = require('./routes/auth');

mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
    .then(() =>{
        console.log("DB connected");
    } )
    .catch((err) =>{
        console.log(err.message);
    });

// seedDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());


// Initilising the passport and sessions for storing the users info
app.use(passport.initialize());
app.use(passport.session());

// configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

app.use(blogRoutes);
app.use(authRoutes);

// Landing page
app.get('/', async(req,res)=>{
    const blogs=await Blog.find({});
    res.render("home", { blogs });
})

// Add video
// app.post('/single', upload.single('blog[img]'), (req, res) => {
//     try {
//       res.render('req.file');
//     }catch(err) {
//       res.send(400);
//     }
//   });



app.listen(8080, ()=>{
    console.log("Listening on the port 8080");
})