const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number }, // Duration in minutes, optional
  reps: { type: Number }, // Number of repetitions, optional
  series: { type: Number }, // Number of series, optional
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
