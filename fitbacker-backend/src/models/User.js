const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  goals: {
    loseWeight: { type: Boolean, default: false },
    gainMuscle: { type: Boolean, default: false },
    improveHealth: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('User', UserSchema);
