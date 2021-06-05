const express = require('express');
const router = express.Router();
const {getStudent} = require('../controller/student');

router.get('/', getStudent);




module.exports = router;
