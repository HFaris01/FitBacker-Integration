import React, { useState } from 'react';

const FoodLogForm = ({ addFoodLogEntry }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodLogEntry({ foodName, calories, protein, carbs, fat });
    setFoodName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
  };

  return (
    <form className="food-log-form" onSubmit={handleSubmit}>
      <h2 style={{ color: 'black' }}>Log Your Food</h2>
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Food Name"
        style={{ color: 'black' }}
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        style={{ color: 'black' }}
      />
      <input
        type="number"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        placeholder="Protein (g)"
        style={{ color: 'black' }}
      />
      <input
        type="number"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
        placeholder="Carbs (g)"
        style={{ color: 'black' }}
      />
      <input
        type="number"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
        placeholder="Fat (g)"
        style={{ color: 'black' }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FoodLogForm;
