const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/users/usersIndex', usersController.index);

module.exports = router;