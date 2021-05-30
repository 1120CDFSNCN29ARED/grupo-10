const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/sign-in', usersController.register);

router.get('/log-in', usersController.login);

module.exports = router;