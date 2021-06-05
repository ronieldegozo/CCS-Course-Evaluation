const express = require('express');
const router = express.Router();
const {getStudent, getRegister, postRegisterStudent} = require('../controller/student');

//get student  home page
router.get('/', getStudent);

//register page
router.get('/register', getRegister);

//post register student account
router.post('/register', postRegisterStudent);



module.exports = router;
