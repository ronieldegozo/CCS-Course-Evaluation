const express = require('express');
const router = express.Router();
const {getAdmin} = require('../controller/admin');

//get student  home page
router.get('/admin', getAdmin);


module.exports = router;
