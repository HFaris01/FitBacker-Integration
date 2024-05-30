import React from 'react';

const NutritionTracking = ({ foodLog }) => {
  if (!Array.isArray(foodLog)) {
    return <p className="text-black-custom">No food log data available.</p>;
  }

  return (
    <div className="nutrition-tracking bg-white-custom p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4 text-black-custom">Nutrition Tracking</h2>
      {foodLog.length === 0 ? (
        <p className="text-black-custom">No food log entries for today.</p>
      ) : (
        <ul className="text-black-custom">
          {foodLog.map((food, index) => (
            <li key={index}>
              {food.name}: {food.calories} kcal, {food.proteins} g proteins, {food.carbs} g carbs, {food.fats} g fats
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NutritionTracking;
