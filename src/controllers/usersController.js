const path = require('path');

const usersController = {
    'index': (req, res) => {
        res.render('usersIndex.ejs');
    }

}

module.exports = usersController;