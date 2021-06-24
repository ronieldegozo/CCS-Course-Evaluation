const express = require('express');
const router = express.Router();
const {getAdmin,getAdminDashboard,getAdminAccount,postAdminRegister, postLoginAdmin, postStudentStatus,getAdminLogout} = require('../controller/admin');
const {getQuestion, getCourse, PostCourse} = require('../controller/adminQuestion');
const {getEmailStudent,getEmailInterviewer} = require('../controller/email');
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

//post admin course 
router.post('/manage-course', PostCourse);

//get admin questions
router.get('/question',ensureAuthenticated, getQuestion);

//get admin email  student
router.get('/email-student',ensureAuthenticated, getEmailStudent);

//get admin email  interviewer
router.get('/email-interviewer',ensureAuthenticated, getEmailInterviewer);

//get admin student files 
router.get('/student-files',ensureAuthenticated, getStudentFiles);

//logout admin
router.get('/logout', getAdminLogout);

module.exports = router;
