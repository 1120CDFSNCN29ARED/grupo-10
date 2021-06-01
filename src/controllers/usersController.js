const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


const usersController = {
    'register': (req, res) => {
        res.render('../views/users/signIn');
    },
    'login': (req, res) => {
        res.render('../views/users/logIn');
    },
    'logout': (req, res) => {
        res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
    },
    'createUser': (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('../views/users/signIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDb = jsonAtajos.findByField('email', req.body.email);
        
        if (userInDb){
            return res.render('../views/users/signIn', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
            
        }

        let userCreated = jsonAtajos.create(userToCreate);

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
    },
    'loginProcess': (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            return res.render('../views/users/logIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }


        let userToLogin = jsonAtajos.findByField('userName', req.body.userName);
        
        if(userToLogin) {
			let passwordValida = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (passwordValida) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
                
				if(req.body.remember_user) {
					res.cookie('userName', req.body.userName, { maxAge: (1000 * 60) * 60 })//1h
				}
                
				res.redirect('/users/profile/' + userToLogin.id);
			} 
			res.render('../views/users/logIn', {
				errors: {
					userName: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('../views/users/signIn', {
			errors: {
				userName: {
					msg: 'No se encuentra este usuario en nuestra base de datos'
				}
			}
		});
    },
    'profile': (req, res) => {
        let user = jsonAtajos.find(req.params.id);     

        res.render('../views/users/profile', {user: user}, { userProfile: req.session.userLogged });
    }
}

module.exports = usersController;