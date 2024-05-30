const FoodLog = require('../models/FoodLog');
const NutritionGoal = require('../models/NutritionGoal');

// Log food entry
const logFood = async (req, res) => {
  try {
    const { name, calories, proteins, carbs, fats } = req.body;
    const foodLog = new FoodLog({
      user: req.user.userId,
      name,
      calories,
      proteins,
      carbs,
      fats,
    });
    await foodLog.save();
    res.status(201).send(foodLog);
  } catch (error) {
    res.status(400).send({ error: 'Error logging food' });
  }
};

// Get daily summary
const getDailySummary = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const summary = await FoodLog.aggregate([
      { $match: { user: req.user.userId, date: { $gte: today } } },
      {
        $group: {
          _id: null,
          calories: { $sum: '$calories' },
          proteins: { $sum: '$proteins' },
          carbs: { $sum: '$carbs' },
          fats: { $sum: '$fats' },
        },
      },
    ]);

    if (summary.length > 0) {
      res.send(summary[0]);
    } else {
      res.send({ calories: 0, proteins: 0, carbs: 0, fats: 0 });
    }
  } catch (error) {
    res.status(400).send({ error: 'Error fetching daily summary' });
  }
};

// Get weekly summary
const getWeeklySummary = async (req, res) => {
  try {
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    const summary = await FoodLog.aggregate([
      { $match: { user: req.user.userId, date: { $gte: weekAgo, $lte: today } } },
      {
        $group: {
          _id: { $dayOfWeek: '$date' },
          calories: { $sum: '$calories' },
          proteins: { $sum: '$proteins' },
          carbs: { $sum: '$carbs' },
          fats: { $sum: '$fats' },
        },
      },
    ]);

    res.send(summary);
  } catch (error) {
    res.status(400).send({ error: 'Error fetching weekly summary' });
  }
};

// Get nutrition goals
const getNutritionGoals = async (req, res) => {
  try {
    const goals = await NutritionGoal.findOne({ user: req.user.userId });
    res.send(goals);
  } catch (error) {
    res.status(400).send({ error: 'Error fetching nutrition goals' });
  }
};

// Update nutrition goals
const updateNutritionGoals = async (req, res) => {
  try {
    const { calories, proteins, carbs, fats } = req.body;
    const goals = await NutritionGoal.findOneAndUpdate(
      { user: req.user.userId },
      { calories, proteins, carbs, fats },
      { new: true, upsert: true }
    );
    res.send(goals);
  } catch (error) {
    res.status(400).send({ error: 'Error updating nutrition goals' });
  }
};

module.exports = {
  logFood,
  getDailySummary,
  getWeeklySummary,
  getNutritionGoals,
  updateNutritionGoals,
};