const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

router.post('/', mailController.sendMail);

module.exports = router;