
//get Question page
exports.getQuestion = (req, res) =>{
    res.render('admin/question', {
        pageTitle: 'Questions'
    });
}
