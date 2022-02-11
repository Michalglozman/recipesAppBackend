const express = require('express');
const router = express.Router();
const recipeBlackListController = require('../Controllers/recipeBlackListController');

router.post('/', recipeBlackListController.addToBlackList );
module.exports = router;