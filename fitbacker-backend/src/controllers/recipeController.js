// src/controllers/recipeController.js
const { searchRecipes: fetchSpoonacularRecipes, getRecipeDetails: fetchSpoonacularRecipeDetails } = require('../services/spoonacularService');
const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res) => {
  const { title, image, readyInMinutes, servings, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({ title, image, readyInMinutes, servings, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Error adding recipe' });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
};

exports.searchRecipes = async (req, res) => {
  const { query } = req.query;
  try {
    const recipes = await fetchSpoonacularRecipes(query);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes from Spoonacular' });
  }
};

exports.getRecipeDetails = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await fetchSpoonacularRecipeDetails(recipeId);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe details from Spoonacular' });
  }
};
