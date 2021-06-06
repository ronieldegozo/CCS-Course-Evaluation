const express = require('express');
const router = express.Router();
const {getStudent, getRegister, postRegisterStudent} = require('../controller/student');
const { postEmail} = require('../controller/email');


//get student  home page
router.get('/', getStudent);

//register page
router.get('/register', getRegister);

//post register student account
router.post('/register', postRegisterStudent);

//email student inquiry
router.post('/email', postEmail);



module.exports = router;
