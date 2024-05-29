const express = require('express');
const { addRecipe, getAllRecipes } = require('../controllers/recipeController');
const router = express.Router();

router.post('/', addRecipe);
router.get('/', getAllRecipes);

module.exports = router;
