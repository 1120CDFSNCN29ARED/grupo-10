const indexController = {
    
    //Home
    'index': (req, res) => {
        res.render('home',  { user: req.session.userLogged });
    }
}

module.exports = indexController;