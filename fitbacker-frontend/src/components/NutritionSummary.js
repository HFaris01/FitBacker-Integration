import React from 'react';

const NutritionSummary = ({ dailySummary }) => {
  const { calories, proteins, carbs, fats } = dailySummary;

  return (
    <div className="nutrition-summary bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Daily Nutrition Summary</h2>
      <ul>
        <li>Calories: {calories} kcal</li>
        <li>Proteins: {proteins} g</li>
        <li>Carbs: {carbs} g</li>
        <li>Fats: {fats} g</li>
      </ul>
    </div>
  );
};

export default NutritionSummary;
