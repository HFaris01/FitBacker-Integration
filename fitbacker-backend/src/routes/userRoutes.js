const express = require('express');
const { registerUser, getLikedRecipes, addLikedRecipe, addMeal } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/:userId/likedRecipes', getLikedRecipes);
router.post('/:userId/likedRecipes/:recipeId', addLikedRecipe);
router.post('/:userId/meals/:recipeId', addMeal);

module.exports = router;
