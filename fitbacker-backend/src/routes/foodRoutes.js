/**
 * @swagger
 * tags:
 *   name: Food
 *   description: Food management
 */

/**
 * @swagger
 * /foods/log:
 *   post:
 *     summary: Log food intake
 *     tags: [Food]
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
 * /foods/daily-summary:
 *   get:
 *     summary: Get daily nutrition summary
 *     tags: [Food]
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
 * /foods/weekly-summary:
 *   get:
 *     summary: Get weekly nutrition summary
 *     tags: [Food]
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
 * /foods/goals:
 *   get:
 *     summary: Get nutrition goals
 *     tags: [Food]
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
 * /foods/goals:
 *   put:
 *     summary: Update nutrition goals
 *     tags: [Food]
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
