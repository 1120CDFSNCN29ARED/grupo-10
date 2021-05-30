const usersController = {
    'register': (req, res) => {
        res.render('../views/users/signIn');
    },
    'login': (req, res) => {
        res.render('../views/users/logIn');
    }
}

module.exports = usersController;