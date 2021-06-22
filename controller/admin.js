const Admin = require('../model/Admin');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Student = require('../model/Student');

//get admin login page
exports.getAdmin = (req, res) =>{
    res.render('admin/admin', {
        pageTitle: 'Admin'
    });
}


//get admin dashboard
exports.getAdminDashboard= (req, res) =>{
    Student.findAll()
    .then((students)=>{
      res.render('admin/dashboard', {
        stud: students,
        pageTitle: 'Admin Dashboard',
        user: req.user, //req user id
        path: '/admin/dashboard'
      });
    })
    .catch((err)=>{
      console.log(err);
    })
}

//create a new admin
exports.postAdminRegister = (req, res) =>{
    const {fname,lname,email,password} = req.body;
    let errors = [];
  
    //check required fileds
    if(!fname || !lname || !email, !password ){
        errors.push({ msg: 'Please fill in all fields'});
    }

    if(password.length <6){
        errors.push({ msg: 'Password should be atleast 6 character'});
    }

  
    if(errors.length >0){
        res.render('admin/dashboard', {
            errors, fname, lname, password,user: false, pageTitle: 'Admin', stud: false, path: '/admin/register'
        });
    }else{
    //validation
    Admin.findOne({ where: { email: email } })
      .then(admin =>{
          if(admin){
              //user exist
              errors.push({ msg: 'Email is already Taken'});
            //   res.redirect('admin/dashboard', )
              res.render('admin/dashboard', {
                errors, fname, lname, email, password, user: false, pageTitle: 'Admin', stud: false, path: '/admin/register'
              });
          }else{
              const newAdmin = new Admin({
                fname,
                lname,
                email,  
                password
              });
              //hashpassword
              bcrypt.genSalt(10, (err, salt)=>{
                  bcrypt.hash(newAdmin.password, salt, (err,hash) => {
                      if(err) throw err;
                      //setpassword to hash
                      newAdmin.password = hash;
                      //save the user
                      newAdmin.save()
                          .then(admin => {
                              req.flash('success_msg','New Admin created Successfully'); //flash message for success user registation
                              res.redirect('/admin/dashboard');
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

//LOGIN HANDLE
exports.postLoginAdmin = (req, res, next) =>{
    passport.authenticate('local', {
        successRedirect: '/admin/dashboard',
        failureRedirect: '/admin',
        failureFlash: true
    })(req, res, next);
}



// handle student status 
exports.postStudentStatus = (req, res, next) => {
    
    const studentId = req.body.studentId;
    const upstatus = req.body.status;
    const update = req.body.date;


    Student.findByPk(studentId)
      .then(students => {
        students.status = upstatus;
        students.date = update;
        return students.save();
        // students.push(students);
      })
      .then(result => {
        console.log('Student Updated!');
        res.redirect('dashboard');
      })
      .catch(err => console.log(err));
}


//admin list of accounbts
exports.getAdminAccount = (req, res) => {

  Admin.findAll()
  .then((admin)=>{
    res.render('admin/adminaccount', {
      admin: admin,
      pageTitle: 'Admin Accounts',
      user: req.user, //req user id
      path: '/admin/account',
    });
  })
  .catch((err)=>{
    console.log(err);
  })


}


//admin logout using passportjs
exports.getAdminLogout = (req, res, next) =>{
    req.logout();
    req.flash('success_msg', 'Admin has been logged out');
    res.redirect('/admin');
}