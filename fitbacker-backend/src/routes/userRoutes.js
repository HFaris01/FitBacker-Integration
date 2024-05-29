const express = require('express');
const { registerUser, getLikedRecipes, addLikedRecipe, addMeal } = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Public routes
router.post('/register', registerUser);

// Protected routes
router.use(verifyToken);
router.get('/:userId/likedRecipes', getLikedRecipes);
router.post('/:userId/likedRecipes/:recipeId', addLikedRecipe);
router.post('/:userId/meals/:recipeId', addMeal);

router.post('/:userId/goals', async (req, res) => {
  try {
    const { userId } = req.params;
    const goals = req.body;
    const user = await User.findByIdAndUpdate(userId, { goals }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating goals' });
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('exercises');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const caloriesData = user.exercises.map(exercise => ({
      date: exercise.date,
      calories: exercise.calories,
    }));

    const recentExercises = user.exercises.slice(-3);

    const suggestedExercise = {
      name: 'Push-ups',
      description: 'Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up to the starting position.',
      muscles: 'Chest, shoulders, triceps, core',
      image: 'https://via.placeholder.com/400',
    };

    res.json({
      caloriesData,
      recentExercises,
      suggestedExercise,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
});

module.exports = router;
