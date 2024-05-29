import React, { useState } from 'react';
import { logFood } from '../services/api';

const FoodLogForm = ({ onFoodLogged }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [proteins, setProteins] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodData = {
        name: foodName,
        calories: parseFloat(calories),
        proteins: parseFloat(proteins),
        carbs: parseFloat(carbs),
        fats: parseFloat(fats),
      };
      await logFood(foodData);
      onFoodLogged(foodData);
      setFoodName('');
      setCalories('');
      setProteins('');
      setCarbs('');
      setFats('');
    } catch (error) {
      console.error('Error logging food:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="food-log-form">
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Food Name"
        required
        className="input"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        required
        className="input"
      />
      <input
        type="number"
        value={proteins}
        onChange={(e) => setProteins(e.target.value)}
        placeholder="Proteins (g)"
        required
        className="input"
      />
      <input
        type="number"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
        placeholder="Carbs (g)"
        required
        className="input"
      />
      <input
        type="number"
        value={fats}
        onChange={(e) => setFats(e.target.value)}
        placeholder="Fats (g)"
        required
        className="input"
      />
      <button type="submit" className="btn">Log Food</button>
    </form>
  );
};

export default FoodLogForm;
