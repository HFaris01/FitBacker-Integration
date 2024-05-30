/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Recipe management
 */

/**
 * @swagger
 * /recipes/search:
 *   get:
 *     summary: Search for recipes
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Recipe search query
 *       - in: query
 *         name: maxCalories
 *         schema:
 *           type: integer
 *         description: Maximum calories
 *       - in: query
 *         name: minProtein
 *         schema:
 *           type: integer
 *         description: Minimum protein
 *       - in: query
 *         name: maxCarbs
 *         schema:
 *           type: integer
 *         description: Maximum carbs
 *       - in: query
 *         name: maxFat
 *         schema:
 *           type: integer
 *         description: Maximum fat
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of recipes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Recipe'
 *                 totalPages:
 *                   type: integer
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get recipe details
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Recipe ID
 *     responses:
 *       200:
 *         description: Recipe details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: Recipe not found
 *       500:
 *         description: Internal server error
 */

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

/**
 * @swagger
 * components:
 *   schemas:
 *     Recipe:
 *       type: object
 *       required:
 *         - title
 *         - image
 *         - readyInMinutes
 *         - servings
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the recipe
 *         image:
 *           type: string
 *           description: The URL of the recipe image
 *         readyInMinutes:
 *           type: integer
 *           description: The time required to prepare the recipe in minutes
 *         servings:
 *           type: integer
 *           description: The number of servings
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: List of ingredients
 *         instructions:
 *           type: array
 *           items:
 *             type: string
 *           description: List of instructions
 */