

exports.getStudent = (req, res) =>{
    res.render('student/student', {
        pageTitle: 'Student'
    });
}

exports.getRegister = (req, res) =>{
    res.render('student/register', {
        pageTitle: 'Registration'
    });
}