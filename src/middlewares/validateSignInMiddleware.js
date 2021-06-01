const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('name').notEmpty().withMessage('Tenes que escribir un Nombre'),
    body('email').notEmpty().withMessage('Tenes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tenes que escribir una contraseña'),
    body('userName').notEmpty().withMessage('Tenes que escribir un nombre de Usuario'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file){
            throw new Error('Tenes que subir una Imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Solo se permiten archivos de tipo ${acceptedExtensions.join(', ')}`);
            }
        }
        return true
                    
    })
]