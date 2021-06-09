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
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('../views/users/signIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user)=> {
            if(user){
                return res.render('../views/users/signIn', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }
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
            

        })
       
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
        
        /*const resultValidation = validationResult(req);


        //no me toma las validaciones del front-end 
        //me las sobreescribe y si no comento esto no se muestran 
        //los errores que siguen de email registrado
        
        if (resultValidation.errors.length > 0){
            return res.render('../views/users/logIn', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }*/
        
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then((user) => {
            if(user) {
                let passwordValida = bcryptjs.compareSync(req.body.password, user.password);//me da siempre false
                if (passwordValida) {
                    delete user.password;
                    //req.session.userLogged = userToLogin;
                    
                    //if(req.body.remember_user) {
                    //    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })//ms
                    //}
                    
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
            res.render('../views/users/logIn', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                }
            });

        })
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
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },

    // Detail
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then( (users) => {
                res.render('../views/users/profile', {users: users})
            })
    }
}


module.exports = usersController;