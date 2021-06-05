const express = require('express');
const router = express.Router();
const {getStudent, getRegister} = require('../controller/student');

//get student  home page
router.get('/', getStudent);

//register page
router.get('/register', getRegister);


module.exports = router;
