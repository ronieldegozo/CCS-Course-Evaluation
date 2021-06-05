const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');

//connection to mysql database
const sequelize = require('./util/database');

const Student = require('./model/Student');

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




sequelize
Student.sync({force: true})

.then((result) =>{
    // console.log(result);
    app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
    console.log('MySql Server Connected')
})

.catch((err) => {
    console.log(err);
})



