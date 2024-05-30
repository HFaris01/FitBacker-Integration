import React from 'react';

const NutritionSummary = ({ dailySummary }) => {
  const { calories, proteins, carbs, fats } = dailySummary;

  return (
    <div className="nutrition-summary bg-white-custom p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4 text-black-custom">Daily Nutrition Summary</h2>
      <ul className="text-black-custom">
        <li>Calories: {calories} kcal</li>
        <li>Proteins: {proteins} g</li>
        <li>Carbs: {carbs} g</li>
        <li>Fats: {fats} g</li>
      </ul>
    </div>
  );
};

export default NutritionSummary;
