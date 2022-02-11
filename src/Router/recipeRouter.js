const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');
const userController = require('../Controllers/userController');

router.get('/ingredients/', recipeController.getRecipesByIngredients );
router.post('/', recipeController.saveRecipe);
router.get('/',  recipeController.getRecipesByUser);
router.delete('/',  recipeController.deleteRecipe);
router.put('/',recipeController.updateRecipe);

module.exports = router;