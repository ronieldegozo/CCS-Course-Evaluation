const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');

//connection to mysql database
const sequelize = require('./util/database');

//passport
const passport = require('passport');


//flash message
const flash = require('connect-flash');
const session = require('express-session');

//passport configuration
require('./config/passport')(passport)


//404 no page fond
const {get404} = require('./controller/404');
//Student ROUTES 
const studentRoute = require('./routes/student');
//admin Routes
const adminRoute = require('./routes/admin');

//EJS
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({}));

//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  //PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());
//global vars
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})


//ROUTE
app.use(studentRoute);
app.use('/admin',adminRoute);
//error code
app.use(get404);

sequelize
.sync()

.then((result) =>{
    // console.log(result);
    app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
    console.log('MySql Server Connected')
})

.catch((err) => {
    console.log(err);
})
