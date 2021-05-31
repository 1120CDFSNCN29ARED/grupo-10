const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');



router.get('/sign-in', usersController.register);
router.post('/sign-in', usersController.createUser);

router.get('/log-in', usersController.login);

router.get('/profile/:id', usersController.profile);

router.get('/list', usersController.list);

router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.editUser);

router.delete('/profile/:id', usersController.delete);


module.exports = router;