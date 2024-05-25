// src/services/spoonacularService.js
const axios = require('axios');

const apiKey = process.env.SPOONACULAR_API_KEY;
const baseURL = 'https://api.spoonacular.com';

const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${baseURL}/recipes/complexSearch`, {
      params: {
        query,
        apiKey,
        addRecipeInformation: true,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes from Spoonacular:', error);
    throw error;
  }
};

const getRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${baseURL}/recipes/${recipeId}/information`, {
      params: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details from Spoonacular:', error);
    throw error;
  }
};

module.exports = {
  searchRecipes,
  getRecipeDetails,
};
