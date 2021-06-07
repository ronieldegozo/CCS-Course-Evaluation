const express = require('express');
const router = express.Router();
const {getAdmin,getAdminDashboard,postAdminRegister, postLoginAdmin} = require('../controller/admin');

//get student  home page
router.get('/', getAdmin);

//get admin dashboard
router.get('/dashboard', getAdminDashboard);

//register admin
router.post('/register', postAdminRegister);

//login admin
router.post('/login', postLoginAdmin );

module.exports = router;
