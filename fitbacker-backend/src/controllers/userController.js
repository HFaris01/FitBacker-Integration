const User = require('../models/User');
const Recipe = require('../models/Recipe');

// Register user
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

// Get user's liked recipes
exports.getLikedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('likedRecipes');
    res.status(200).json(user.likedRecipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching liked recipes' });
  }
};

// Add recipe to liked recipes
exports.addLikedRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const recipe = await Recipe.findById(req.params.recipeId);
    user.likedRecipes.push(recipe);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding liked recipe' });
  }
};

// Add recipe to today's meal
exports.addMeal = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const recipe = await Recipe.findById(req.params.recipeId);
    user.meals.push(recipe);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding meal' });
  }
};
