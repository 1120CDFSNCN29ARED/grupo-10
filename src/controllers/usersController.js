
const usersController = {
    'profile': (req, res) => {
        res.render('../views/users/profile');
    },
    'loginIndex': (req,res) => {
        res.render('../views/users/register-login');
    },
    'register': (req, res) => {
        res.render('../views/users/register-login');
    },
    'registerUser': (req, res) => {    
        let user = {
            name: req.body.name,
            email: req.body.email,
            userName: req.body.userName,
            birthDate: req.body.birthDate,
            adress: req.body.adress,
            password: req.body.password
        };
        res.send(user);

    },
    'login': (req, res) => { 

        let user = {
            userName: req.body.userName,
            password: req.body.password
        };
        res.send(user);
    }

}

module.exports = usersController;