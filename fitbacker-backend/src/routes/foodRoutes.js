const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.post('/log', async (req, res) => {
  const { name, calories, proteins, carbs, fats } = req.body;
  try {
    const newFood = new Food({ name, calories, proteins, carbs, fats });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: 'Error logging food', error });
  }
});

router.get('/weekly', async (req, res) => {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
  
      const weeklyNutrition = await Food.aggregate([
        { $match: { date: { $gte: startDate } } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
            calories: { $sum: '$calories' },
            proteins: { $sum: '$proteins' },
            carbs: { $sum: '$carbs' },
            fats: { $sum: '$fats' },
          },
        },
        { $sort: { _id: 1 } },
      ]);
  
      res.json(weeklyNutrition);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching weekly nutrition', error });
    }
  });
  

  router.get('/weekly', async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    const weeklyNutrition = await Food.aggregate([
      { $match: { date: { $gte: startDate } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
          calories: { $sum: '$calories' },
          proteins: { $sum: '$proteins' },
          carbs: { $sum: '$carbs' },
          fats: { $sum: '$fats' },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(weeklyNutrition);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weekly nutrition', error });
  }
});

router.get('/weekly', async (req, res) => {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
  
      const weeklyNutrition = await Food.aggregate([
        { $match: { date: { $gte: startDate } } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
            calories: { $sum: '$calories' },
            proteins: { $sum: '$proteins' },
            carbs: { $sum: '$carbs' },
            fats: { $sum: '$fats' },
          },
        },
        { $sort: { _id: 1 } },
      ]);
  
      res.json(weeklyNutrition);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching weekly nutrition', error });
    }
  });  

module.exports = router;
