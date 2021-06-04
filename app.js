const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');

//ADMIN ROUTES 
const adminRoute = require('./routes/admin');
//EJS
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({}));


//ROUTE
app.use(adminRoute);


app.listen(PORT, console.log(`Server Started on Port ${PORT}`));