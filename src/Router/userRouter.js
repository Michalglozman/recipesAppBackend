const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/login/', userController.loginUser );
module.exports = router;