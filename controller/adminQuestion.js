const Course = require('../model/Course');


//get Question page
exports.getQuestion = (req, res) =>{
    res.render('admin/question', {
        pageTitle: 'Questions',
        user: req.user,
        path: '/admin/question'
    });
}

//getting course
exports.getCourse = (req, res) =>{
    res.render('admin/course', {
        pageTitle: 'Course',
        user: req.user,
        path: '/admin/manage-course'
    });
}

//add new course
exports.PostCourse = (req, res, next) => {
    const {course} = req.body;

    Course.create({
        course: course,
    })
    .then(result =>{
        console.log(result);
        res.redirect('/admin/manage-course');
    })
    .catch((err) =>{
        console.log(err)
    })

}