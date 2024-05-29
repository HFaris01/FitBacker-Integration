const Nutrition = require('../models/Nutrition');

// Create a new nutrition log entry
exports.addNutritionLog = async (req, res) => {
  const { date, calories, protein, carbs, fat } = req.body;

  try {
    const nutritionLog = new Nutrition({
      user: req.user.id,
      date,
      calories,
      protein,
      carbs,
      fat,
    });

    const savedLog = await nutritionLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get nutrition logs for a user by week
exports.getWeeklyNutritionLogs = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const logs = await Nutrition.find({
      user: req.user.id,
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    res.status(200).json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
