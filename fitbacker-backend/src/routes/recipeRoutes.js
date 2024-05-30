const express = require('express');
const router = express.Router();
const { getRecipes, getRecipeDetails, getRecipeNutrients, likeRecipe, addMeal } = require('../controllers/recipeController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/search', async (req, res) => {
    try {
        const { query, maxCalories, minProtein, maxCarbs, maxFat, page } = req.query;
        const filters = {};
        if (maxCalories) filters.maxCalories = maxCalories;
        if (minProtein) filters.minProtein = minProtein;
        if (maxCarbs) filters.maxCarbs = maxCarbs;
        if (maxFat) filters.maxFat = maxFat;
        const recipes = await getRecipes(query, filters, page);
        res.json({ results: recipes.results, totalPages: recipes.totalPages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

router.get('/:id', getRecipeDetails);
router.post('/like', verifyToken, likeRecipe);
router.post('/meal', verifyToken, addMeal);
router.get('/nutrients/:recipeId', getRecipeNutrients);

module.exports = router;
