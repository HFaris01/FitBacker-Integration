import React from 'react';

const FoodSuggestions = () => {
  // Placeholder data, replace with real data or API call
  const suggestions = [
    { name: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    { name: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.3 },
    { name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  ];

  return (
    <div className="summary">
      <h2 style={{ color: 'black' }}>Food Suggestions</h2>
      <ul>
        {suggestions.map((food, index) => (
          <li key={index} style={{ color: 'black' }}>
            {food.name} - {food.calories} kcal, {food.protein}g protein, {food.carbs}g carbs, {food.fat}g fat
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSuggestions;
