const express = require('express');
const { logFood, getDailySummary, getWeeklySummary, getNutritionGoals, updateNutritionGoals } = require('../controllers/nutritionController');
const verifyToken = require('../middleware/authMiddleware');
const Food = require('../models/Food');

const router = express.Router();

router.post('/log', verifyToken, logFood);
router.get('/daily-summary', verifyToken, getDailySummary);
router.get('/weekly-summary', verifyToken, getWeeklySummary);
router.get('/goals', verifyToken, getNutritionGoals);
router.put('/goals', verifyToken, updateNutritionGoals);

module.exports = router;
