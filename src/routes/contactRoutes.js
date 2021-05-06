const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactInfoController');

/* GET home page. */
router.get ('/contact', contactController.contactInfo);

module.exports = router;