const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/products', usersController.index);

module.exports = router;