const Exercise = require('../models/Exercise');

// Add a new exercise
exports.addExercise = async (req, res) => {
  const { name, duration, reps, series, date } = req.body;
  try {
    const newExercise = new Exercise({
      name,
      duration,
      reps,
      series,
      date,
      userId: req.user.id // Assuming user ID is available in req.user
    });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: 'Error adding exercise' });
  }
};

// Get all exercises for a user
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises' });
  }
};

// Delete an exercise
exports.deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Exercise deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exercise' });
  }
};
