const express = require('express');
const router = express.Router();
const NutritionGoals = require('../models/NutritionGoals');

// Fetch nutrition goals
router.get('/goals', async (req, res) => {
  try {
    const goals = await NutritionGoals.findOne();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nutrition goals', error });
  }
});

// Update nutrition goals
router.put('/goals', async (req, res) => {
  const { calories, proteins, carbs, fats } = req.body;
  try {
    let goals = await NutritionGoals.findOne();
    if (goals) {
      goals.calories = calories;
      goals.proteins = proteins;
      goals.carbs = carbs;
      goals.fats = fats;
    } else {
      goals = new NutritionGoals({ calories, proteins, carbs, fats });
    }
    await goals.save();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Error updating nutrition goals', error });
  }
});

module.exports = router;
