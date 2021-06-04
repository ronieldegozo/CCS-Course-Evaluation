const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyparser = require('body-parser');

app.use('/', (req,res,next) =>{
    res.sendStatus(200);
})



app.listen(PORT, console.log(`Server Started on Port ${PORT}`));