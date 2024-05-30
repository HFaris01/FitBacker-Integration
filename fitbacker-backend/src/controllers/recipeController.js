const axios = require('axios');

const getRecipes = async (query, filters, page = 1) => {
    try {
        const apiKey = process.env.SPOONACULAR_API_KEY;
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=12&offset=${(page - 1) * 12}`;
        if (query) url += `&query=${query}`;
        if (filters.maxCalories) url += `&maxCalories=${filters.maxCalories}`;
        if (filters.minProtein) url += `&minProtein=${filters.minProtein}`;
        if (filters.maxCarbs) url += `&maxCarbs=${filters.maxCarbs}`;
        if (filters.maxFat) url += `&maxFat=${filters.maxFat}`;
        const response = await axios.get(url);
        const totalResults = response.data.totalResults;
        const totalPages = Math.ceil(totalResults / 12);
        return { results: response.data.results, totalPages };
    } catch (error) {
        throw new Error('Failed to fetch recipes');
    }
};

const getRecipeDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const apiKey = process.env.SPOONACULAR_API_KEY;
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipe details' });
    }
};

const likeRecipe = async (req, res) => {
    // Implement liking a recipe
};

const addMeal = async (req, res) => {
    // Implement adding a meal
};

const getRecipeNutrients = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json`, {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
      },
    });
    const nutrients = response.data;
    res.json(nutrients);
  } catch (error) {
    console.error('Error fetching recipe nutrients:', error);
    res.status(500).send('Error fetching recipe nutrients');
  }
};


module.exports = {
    getRecipes,
    getRecipeDetails,
    likeRecipe,
    addMeal,
    getRecipeNutrients
};
