import React from 'react';

const NutritionSummary = ({ foodLog }) => {
  const totalCalories = foodLog.reduce((acc, food) => acc + Number(food.calories), 0);
  const totalProtein = foodLog.reduce((acc, food) => acc + Number(food.protein), 0);
  const totalCarbs = foodLog.reduce((acc, food) => acc + Number(food.carbs), 0);
  const totalFat = foodLog.reduce((acc, food) => acc + Number(food.fat), 0);

  return (
    <div className="summary">
      <h2 style={{ color: 'black' }}>Daily Nutrition Summary</h2>
      <p style={{ color: 'black' }}>Calories: {totalCalories}</p>
      <p style={{ color: 'black' }}>Protein: {totalProtein}g</p>
      <p style={{ color: 'black' }}>Carbs: {totalCarbs}g</p>
      <p style={{ color: 'black' }}>Fat: {totalFat}g</p>
    </div>
  );
};

export default NutritionSummary;
