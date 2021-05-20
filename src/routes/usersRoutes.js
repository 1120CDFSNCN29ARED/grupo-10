const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/profile', usersController.profile);
router.get('/login', usersController.loginIndex);
router.post('/login', usersController.login);
router.post('/register', usersController.registerUser)
router.get('/register', usersController.register);

module.exports = router;