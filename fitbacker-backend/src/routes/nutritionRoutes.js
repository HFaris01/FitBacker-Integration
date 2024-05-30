/**
 * @swagger
 * tags:
 *   name: Nutrition
 *   description: Nutrition management
 */

/**
 * @swagger
 * /nutrition/logFood:
 *   post:
 *     summary: Log food intake
 *     tags: [Nutrition]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - calories
 *               - proteins
 *               - carbs
 *               - fats
 *             properties:
 *               name:
 *                 type: string
 *               calories:
 *                 type: number
 *               proteins:
 *                 type: number
 *               carbs:
 *                 type: number
 *               fats:
 *                 type: number
 *     responses:
 *       200:
 *         description: Food logged successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /nutrition/dailySummary:
 *   get:
 *     summary: Get daily nutrition summary
 *     tags: [Nutrition]
 *     responses:
 *       200:
 *         description: Daily nutrition summary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 calories:
 *                   type: number
 *                 proteins:
 *                   type: number
 *                 carbs:
 *                   type: number
 *                 fats:
 *                   type: number
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /nutrition/weeklySummary:
 *   get:
 *     summary: Get weekly nutrition summary
 *     tags: [Nutrition]
 *     responses:
 *       200:
 *         description: Weekly nutrition summary
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   day:
 *                     type: string
 *                   calories:
 *                     type: number
 *                   proteins:
 *                     type: number
 *                   carbs:
 *                     type: number
 *                   fats:
 *                     type: number
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /nutrition/goals:
 *   get:
 *     summary: Get nutrition goals
 *     tags: [Nutrition]
 *     responses:
 *       200:
 *         description: Nutrition goals
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 calories:
 *                   type: number
 *                 proteins:
 *                   type: number
 *                 carbs:
 *                   type: number
 *                 fats:
 *                   type: number
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /nutrition/goals:
 *   put:
 *     summary: Update nutrition goals
 *     tags: [Nutrition]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - calories
 *               - proteins
 *               - carbs
 *               - fats
 *             properties:
 *               calories:
 *                 type: number
 *               proteins:
 *                 type: number
 *               carbs:
 *                 type: number
 *               fats:
 *                 type: number
 *     responses:
 *       200:
 *         description: Nutrition goals updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

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
