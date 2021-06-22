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
    Course.findAll()
    .then((course)=>{
      res.render('admin/course', {
        course: course,
        pageTitle: 'Course',
        user: req.user, //req user id
        path: '/admin/manage-course'
      });
    })
    .catch((err)=>{
      console.log(err);
    })
}

//add new course
exports.PostCourse = (req, res, next) => {
    const {course} = req.body;

    Course.create({
        course: course,
    })
    .then(result =>{
        console.log('New Course Created');
        res.redirect('/admin/manage-course');
    })
    .catch((err) =>{
        console.log(err)
    })

}