/*const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('users');*/
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
let db = require('../database/models');


const usersController = {
   
    //Listado
    'list': (req, res) => {
        db.User.findAll()
            .then((users) => {
                res.render('../views/users/usersList', { users: users })
            })
    },

    //Registro
    'register': (req, res) => {
        res.render('../views/users/signIn');
    },

    'createUser': (req, res) => {
        /*const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('../views/users/signIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }*/
        db.User.create({
            first_name: req.body.name,
            last_name: req.body.apellido,
            email: req.body.email,
            nickname: req.body.userName,
            profile_img: req.file ? req.file.filename : 'userAvatar.png', //ERROR TypeError: Cannot read property 'filename' of undefined.
            password: bcryptjs.hashSync(req.body.password, 10),
            user_type_id: null,
            location_id: null
        })
        res.redirect('/users/list');
        /*db.User.findAll()
        .then((users)=> {
            for(let i = 0; i < users.length ; i++){
                if(req.body.email == user[i].email){
                    return res.render('../views/users/signIn', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body
                    });
                }
                
        
                
            }

        })*/

        
        
        /*let userEmailInDb = jsonAtajos.findByField('email', req.body.email);
        let userNameInDb = jsonAtajos.findByField('userName', req.body.userName);
        
        
        if (userNameInDb){
            return res.render('../views/users/signIn', {
                errors: {
                    userName: {
                        msg: 'Este usuario ya existe'
                    }
                },
                oldData: req.body
            });
        }

        if (userEmailInDb){
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

        let userCreated = jsonAtajos.create(userToCreate);*/

        //res.redirect('/users/log-in');
    },

    //Edicion
    'edit': (req, res) => {
        /*let usuarioAEditar = req.session.userLogged;*/
        db.User.findByPk(req.params.id)
            .then((users) => {
                res.render('../views/users/userEdit', { users: users });
            })
    },
    'updateUser': (req, res) => {
        db.User.update({
            first_name: req.body.name,
            last_name: req.body.apellido,
            email: req.body.email,
            nickname: req.body.userName,
            profile_img: req.body.avatar,
            password: req.body.password,
            user_type_id: null,
            location_id: null
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/users/list');
    },

    //Eliminacion
    'delete': (req, res) => {
        /*let IdToDelete =  (req.session.userLogged.id);*/ //req.body.id

        db.User.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/users/list');

    },

    //Inicio Sesion
    'login': (req, res) => {
        res.render('../views/users/logIn');
    },

    'loginProcess': (req, res) => {
        /*
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            return res.render('../views/users/logIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        */


        /*let userToLogin = jsonAtajos.findByField('userName', req.body.userName);*/

        /* if(userToLogin) {
             let passwordValida = bcryptjs.compareSync(req.body.password, userToLogin.password);
             if (passwordValida) {
                 delete userToLogin.password;
                 req.session.userLogged = userToLogin;
                 
                 if(req.body.remember_user) {
                     res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })//ms
                 }
                 
                 res.redirect('/users/profile');
             } 
             res.render('../views/users/logIn', {
                 errors: {
                     email: {
                         msg: 'Las credenciales son inválidas'
                     }
                 }
             });
         }
 
         return res.render('../views/users/logIn', {
             errors: {
                 email: {
                     msg: 'No se encuentra este email en nuestra base de datos'
                 }
             }
         });*/
    },


    'logout': (req, res) => {
        res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
    }, 
    
    //Perfil
    'profile': (req, res) => {   
        db.User.findByPk(req.params.id)
            .then(() => {
                res.render('../views/users/profile', { /*user: req.session.userLogged*/ });
            })
    },
    
    //LogOut
    'logout': (req, res) => {
        /*res.clearCookie('userEmail');
        req.session.destroy();*/
        res.redirect('/');
    }
}

module.exports = usersController;