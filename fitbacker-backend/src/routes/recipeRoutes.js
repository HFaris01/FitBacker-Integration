// src/routes/recipeRoutes.js
const express = require('express');
const { addRecipe, getAllRecipes, searchRecipes, getRecipeDetails } = require('../controllers/recipeController');
const router = express.Router();

router.post('/', addRecipe);
router.get('/', getAllRecipes);
router.get('/search', searchRecipes); 
router.get('/:recipeId', getRecipeDetails); 

module.exports = router;
