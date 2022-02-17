const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const authController = require('../Controllers/authController');

router.get('/users/',authController.authenticateJWT,userController.usersRecipes);
router.get('/login/', userController.loginUser);
module.exports = router;