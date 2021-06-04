const express = require('express');
const router = express.Router();
const {getAdmin} = require('../controller/admin');

router.get('/', getAdmin);




module.exports = router;
