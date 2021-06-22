
//get Question page
exports.getQuestion = (req, res) =>{
    res.render('admin/question', {
        pageTitle: 'Questions',
        user: req.user,
        path: '/admin/question'
    });
}


exports.getCourse = (req, res) =>{
    res.render('admin/course', {
        pageTitle: 'Course',
        user: req.user,
        path: '/admin/manage-course'
    });
}
