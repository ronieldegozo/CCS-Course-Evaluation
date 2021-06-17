const express = require('express');
const router = express.Router();
const {getAdmin,getAdminDashboard,postAdminRegister, postLoginAdmin, getEditStudentStatus, postStudentStatus,getAdminLogout} = require('../controller/admin');
const {ensureAuthenticated} = require('../config/authentication');

//get student  home page
router.get('/', getAdmin);

//get admin dashboard //protected by the admin
router.get('/dashboard',ensureAuthenticated, getAdminDashboard);

//register admin
router.post('/register', postAdminRegister);

//login admin
router.post('/login', postLoginAdmin );

//student status
router.post('/student-status', postStudentStatus);

//logout admin
router.get('/logout', getAdminLogout);

module.exports = router;
