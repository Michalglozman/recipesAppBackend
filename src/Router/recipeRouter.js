const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');
const userController = require('../Controllers/userController');

router.all('*', userController.userConnected);
router.get('/ingredients/', recipeController.getRecipesByIngredients );
router.post('/', recipeController.saveRecipe);
router.get('/',  recipeController.getRecipesByUser);
router.delete('/:id/*',  recipeController.deleteRecipe);

module.exports = router;