const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');


const validations = require('../middlewares/validateSignInMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//MULTER
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {      
        let folder = path.resolve(__dirname, '../../public/img/avatars');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})
const uploadFile = multer({ storage });


//Listado de Usuarios
router.get('/list', usersController.list);

//Registro
router.get('/sign-in', guestMiddleware, usersController.register);
router.post('/sign-in', uploadFile.single('avatar'), validations, usersController.createUser);

//Edicion
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.updateUser);

//Eliminacion
router.post('/delete/:id', usersController.delete);

//Inicio Sesion
router.get('/log-in', guestMiddleware, usersController.login);
router.post('/log-in', validations, usersController.loginProcess);

//Perfil
router.get('/profile/', authMiddleware, usersController.profile);

//Salir de la Sesion
router.get('/logout/', usersController.logout);

//detalle
router.get('/detail/:id',  usersController.detail);




module.exports = router;