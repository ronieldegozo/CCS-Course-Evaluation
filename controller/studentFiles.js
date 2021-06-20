exports.getStudentFiles = (req, res, next) =>{
    res.render('admin/studentfiles', {
        pageTitle: 'Student Files',
        user: req.user,
        path: '/admin/student-files'
    });
}