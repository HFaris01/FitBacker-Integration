const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  readyInMinutes: { type: Number, required: true },
  servings: { type: Number, required: true },
  ingredients: [String],
  instructions: [String],
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
