const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const uploadFile = require('../middlewares/usersMulterMiddleware');
const validations = require('../middlewares/validateSignInMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/sign-in', guestMiddleware, usersController.register);
router.post('/sign-in', uploadFile.single('avatar'), validations, usersController.createUser);

router.get('/log-in', guestMiddleware, usersController.login);
router.post('/log-in', validations, usersController.loginProcess);

router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout/', usersController.logout);

router.get('/list', usersController.list);

router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.updateUser);

router.post('/delete/:id', authMiddleware,  usersController.delete);


module.exports = router;