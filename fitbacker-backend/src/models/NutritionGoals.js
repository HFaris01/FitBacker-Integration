const mongoose = require('mongoose');

const NutritionGoalsSchema = new mongoose.Schema({
  calories: { type: Number, required: true },
  proteins: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true },
});

module.exports = mongoose.model('NutritionGoals', NutritionGoalsSchema);
