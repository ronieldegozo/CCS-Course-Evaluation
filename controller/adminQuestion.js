
//get Question page
exports.getQuestion = (req, res) =>{
    res.render('admin/includes/question', {
        pageTitle: 'Questions'
    });
}
