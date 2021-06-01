const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateSignInMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/sign-in', guestMiddleware, usersController.register);
router.post('/sign-in', uploadFile.single('avatar'), validations, usersController.createUser);

router.get('/log-in', guestMiddleware, usersController.login);
router.post('/log-in', guestMiddleware, validations, usersController.loginProcess);

router.get('/profile/:id', authMiddleware, usersController.profile);

router.get('/list', usersController.list);

router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.editUser);

router.delete('/profile/:id',  usersController.delete);


module.exports = router;