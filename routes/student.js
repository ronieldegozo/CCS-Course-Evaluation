const express = require('express');
const router = express.Router();
const {getStudent, getRegister, postRegisterStudent, postLoginStudent, getStudentDashboard} = require('../controller/student');
const { postEmail} = require('../controller/email');


//get student  home page
router.get('/', getStudent);

//register page
router.get('/register', getRegister);

//post register student account
router.post('/register', postRegisterStudent);

//post login student
router.post('/login', postLoginStudent);

//get Student dashboard
router.get('/dashboard', getStudentDashboard);

//email student inquiry
router.post('/email', postEmail);



module.exports = router;
