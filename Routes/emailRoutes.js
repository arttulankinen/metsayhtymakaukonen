const express = require('express');
const router = express.Router();
const sendEmail = require('../Controllers/sendEmail');

router.post('/send', sendEmail);

module.exports = router;
