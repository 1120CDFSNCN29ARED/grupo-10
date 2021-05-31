const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('users');
const bcrypt = require('bcrypt');


const usersController = {
    'register': (req, res) => {
        res.render('../views/users/signIn');
    },
    'login': (req, res) => {
        res.render('../views/users/logIn');
    },
    'profile': (req, res) => {
        let user = jsonAtajos.find(req.params.id);

        res.render('../views/users/profile', {user: user});
    },
    'createUser': (req, res) => {
        let user = {
            name: req.body.name,
            email: req.body.email,
            userName: req.body.userName,
            avatar: req.body.avatar,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        jsonAtajos.create(user);

        res.redirect('/users/list');
    },
    'list': (req, res) => {
        let users = jsonAtajos.readFile('users');

        res.render('../views/users/usersList', {users: users})
    },
    'delete': (req, res) => {
        let IdToDelete =   req.body.id; 
        jsonAtajos.delete(IdToDelete);

        res.redirect('/users/list');

    },
    'edit': (req, res) => {
        let usuarioAEditar = jsonAtajos.find(req.params.id);

        res.render('../views/users/userEdit', {usuarioAEditar: usuarioAEditar});
    },
    'editUser': (req, res) => {
        let userId = req.body;
        let EditedUser = jsonAtajos.update(userId);

        res.redirect('/users/list');
    }
}

module.exports = usersController;