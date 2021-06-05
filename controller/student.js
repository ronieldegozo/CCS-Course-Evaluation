const Student = require('../model/Student');


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

    Student.create({
        fname: fname,
        lname: lname,
        cnumber: cnumber,
        email: email,
        password: password,
    })

    .then((student) =>{
        console.log('Student created', student);
        res.redirect('/');
    })

    .catch((err) =>{
        console.log(err)
    })

}