const express = require('express');
const router = express.Router();
const recipeBlackListController = require('../Controllers/recipeBlackListController');
const authController = require('../Controllers/authController');

router.post('/', authController.authenticateJWT,recipeBlackListController.addToBlackList );
router.put('/', authController.authenticateJWT,recipeBlackListController.updateBlackList );
router.get('/', authController.authenticateJWT,recipeBlackListController.getBlackList );

module.exports = router;