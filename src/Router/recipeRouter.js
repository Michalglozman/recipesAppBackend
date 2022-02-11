const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');
const userController = require('../Controllers/userController');

router.get('/ingredients/', recipeController.getRecipesByIngredients );
router.post('/', recipeController.saveRecipe);
router.post('/approval',recipeController.changeApprovalStatus);
router.get('/',  recipeController.getRecipesByUser);
router.get('/approval',recipeController.getRecipesToApprove);
router.delete('/',  recipeController.deleteRecipe);
router.put('/',recipeController.updateRecipe);

module.exports = router;