const express = require('express');
const {
  logFood,
  getDailySummary,
  getWeeklySummary,
  getNutritionGoals,
  updateNutritionGoals,
} = require('../controllers/nutritionController');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/logFood', verifyToken, logFood);
router.get('/dailySummary', verifyToken, getDailySummary);
router.get('/weeklySummary', verifyToken, getWeeklySummary);
router.get('/goals', verifyToken, getNutritionGoals);
router.put('/goals', verifyToken, updateNutritionGoals);

module.exports = router;
