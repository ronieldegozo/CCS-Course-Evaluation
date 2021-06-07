exports.getAdmin = (req, res) =>{
    res.render('admin/admin', {
        pageTitle: 'Admin'
    });
}
