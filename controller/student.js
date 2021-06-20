const Student = require('../model/Student');
const bcrypt = require('bcryptjs');
const passport = require('passport');

//get home page for student
exports.getStudent = (req, res) =>{
    res.render('student/student', {
        pageTitle: 'Student'
    });
}

//get register page
exports.getRegister = (req, res) =>{
    res.render('student/register', {
        pageTitle: 'Registration'
    });
}


//post register student
exports.postRegisterStudent = (req, res) =>{
    const {fname,lname,cnumber,email,password} = req.body;
    // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let errors = [];
  
    // check required fileds
    if(!fname || !lname || !cnumber || !email, !password ){
        errors.push({ msg: 'Please fill in all fields'});
    }
    if(password.length <6){
        errors.push({ msg: 'Password should be atleast 6 character'});
    }
  
    if(errors.length >0){
        res.render('student/register', {
            errors, fname, lname,cnumber, email, password, pageTitle: 'Register'
        });
    }else{
    //validation
    Student.findOne({ where: { email: email } })
      .then(student =>{
          if(student){
              //user exist
              errors.push({ msg: 'Email is already Taken'});
              res.render('student/register', {
                errors, fname, lname,cnumber, email, password, pageTitle: 'Register'
              });
          }else{
              const newStudent = new Student({
                fname,
                lname,
                cnumber,
                email,  
                password,
              });
              //hashpassword
              bcrypt.genSalt(10, (err, salt)=>{
                  bcrypt.hash(newStudent.password, salt, (err,hash) => {
                      if(err) throw err;
                      //setpassword to hash
                      newStudent.password = hash;
                      //save the user
                      newStudent.save()
                          .then(student => {
                              req.flash('success_msg','You are now Registered admin will verify your account'); //flash message for success user registation
                              res.redirect('/');
                            //   console.log('new sutdent')
                          })
                          .catch(err => console.log(err));
                  })
              })
          }
      })
      .catch((err)=>{
          console.log(err);
      });
  
    }
}

//loggin students to the student dashboard
exports.postLoginStudent = (req, res, next) =>{
    console.log('Logging students');
}


//get student dashboard
exports.getStudentDashboard = (req, res, next) =>{
   res.render('student/dashboard', {
    pageTitle: 'Student Dashboard'
   });
}