const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');
const authController = require('../Controllers/authController');

router.get('/ingredients/', authController.authenticateJWT,recipeController.getRecipesByIngredients );
router.post('/',authController.authenticateJWT, recipeController.saveRecipe);
router.post('/approval',authController.authenticateJWT,recipeController.changeApprovalStatus);
router.get('/', authController.authenticateJWT, recipeController.getRecipesByUser);
router.get('/approval',authController.authenticateJWT,recipeController.getRecipesToApprove);
router.post('/remove',authController.authenticateJWT,recipeController.removeFromSchedule)
router.delete('/', authController.authenticateJWT, recipeController.deleteRecipe);
router.put('/',authController.authenticateJWT,recipeController.updateRecipe);

module.exports = router;