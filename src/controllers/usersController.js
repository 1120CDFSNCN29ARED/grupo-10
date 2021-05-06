
const usersController = {
    'profile': (req, res) => {
        res.render('../views/users/profile');
    },
    'login': (req,res) => {
        res.render('../views/users/register-login');
    },
    'register': (req, res) => {
        res.render('../views/users/register-login');
    }

}

module.exports = usersController;