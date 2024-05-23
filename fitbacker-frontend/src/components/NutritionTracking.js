import React from 'react';

const NutritionTracking = ({ loggedFoods, nutritionSummary }) => {
  return (
    <div className="nutrition-tracking">
      <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>Daily Nutrition Summary</h2>
      <p style={{ color: 'black' }}>Calories: {nutritionSummary.calories}</p>
      <p style={{ color: 'black' }}>Protein: {nutritionSummary.protein}g</p>
      <p style={{ color: 'black' }}>Carbs: {nutritionSummary.carbs}g</p>
      <p style={{ color: 'black' }}>Fat: {nutritionSummary.fat}g</p>

      <h2 className="text-2xl font-bold mt-6 mb-4" style={{ color: 'black' }}>Logged Foods</h2>
      <ul className="list-disc list-inside" style={{ color: 'black' }}>
        {loggedFoods.map((food, index) => (
          <li key={index}>
            {food.foodName} - {food.calories} kcal, {food.protein}g protein, {food.carbs}g carbs, {food.fat}g fat
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionTracking;
