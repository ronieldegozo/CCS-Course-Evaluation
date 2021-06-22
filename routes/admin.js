const express = require('express');
const router = express.Router();
const {getAdmin,getAdminDashboard,getAdminAccount,postAdminRegister, postLoginAdmin, postStudentStatus,getAdminLogout} = require('../controller/admin');
const {getQuestion, getCourse} = require('../controller/adminQuestion');
const {getEmail} = require('../controller/email');
const {getStudentFiles} = require('../controller/studentFiles');

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

//get admin course 
router.get('/manage-course',ensureAuthenticated, getCourse);

//get admin questions
router.get('/question',ensureAuthenticated, getQuestion);

//get admin email 
router.get('/email',ensureAuthenticated, getEmail);

//get admin student files 
router.get('/student-files',ensureAuthenticated, getStudentFiles);

//logout admin
router.get('/logout', getAdminLogout);

module.exports = router;
