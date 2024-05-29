const express = require('express');
const { addExercise, getAllExercises, deleteExercise } = require('../controllers/exerciseController');
const router = express.Router();
const auth = require('../middleware/authMiddleware'); // Middleware to check authentication

router.post('/', auth, addExercise);
router.get('/', auth, getAllExercises);
router.delete('/:id', auth, deleteExercise);

module.exports = router;
