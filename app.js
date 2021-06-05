const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');

//404 no page fond
const {get404} = require('./controller/404');
//ADMIN ROUTES 
const studentRoute = require('./routes/student');

//EJS
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({}));


//ROUTE
app.use(studentRoute);

//error code
app.use(get404);




app.listen(PORT, console.log(`Server Started on Port ${PORT}`));