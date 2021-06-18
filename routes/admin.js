const express = require('express');
const router = express.Router();
const {getAdmin,getAdminDashboard,getAdminAccount,postAdminRegister, postLoginAdmin, postStudentStatus,getAdminLogout} = require('../controller/admin');
const {getQuestion} = require('../controller/adminQuestion');

const {ensureAuthenticated} = require('../config/authentication');

//get student  home page
router.get('/', getAdmin);

//get admin dashboard //protected by the admin
router.get('/dashboard',ensureAuthenticated, getAdminDashboard);

//GET ADMIN ACCOUNT ROUTE
router.get('/account', ensureAuthenticated, getAdminAccount);

//register admin
router.post('/register', postAdminRegister);

//login admin
router.post('/login', postLoginAdmin );

//student status
router.post('/student-status', postStudentStatus);

//get admin questions
router.get('/question',ensureAuthenticated, getQuestion);

//logout admin
router.get('/logout', getAdminLogout);

module.exports = router;
