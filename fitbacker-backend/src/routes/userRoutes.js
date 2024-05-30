const express = require('express');
const { registerUser, getLikedRecipes, addLikedRecipe, addMeal } = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

// Protected routes
//router.use(verifyToken);
/*router.get('/:userId/likedRecipes', getLikedRecipes);
router.post('/:userId/likedRecipes/:recipeId', addLikedRecipe);
router.post('/:userId/meals/:recipeId', addMeal);*/

/*router.post('/:userId/goals', async (req, res) => {
  try {
    const { userId } = req.params;
    const goals = req.body;
    const user = await User.findByIdAndUpdate(userId, { goals }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating goals' });
  }
});*/

/*router.get('/dashboard', async (req, res) => {
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
});*/

module.exports = router;
