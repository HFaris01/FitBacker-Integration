import React, { useState, useEffect } from 'react';
import { fetchNutritionGoals, updateNutritionGoals } from '../services/api';

const NutritionGoals = () => {
  const [goals, setGoals] = useState({
    calories: '',
    proteins: '',
    carbs: '',
    fats: '',
  });

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await fetchNutritionGoals();
        setGoals(data);
      } catch (error) {
        console.error('Error fetching nutrition goals:', error);
      }
    };

    fetchGoals();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoals((prevGoals) => ({
      ...prevGoals,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNutritionGoals(goals);
      alert('Goals updated successfully');
    } catch (error) {
      console.error('Error updating nutrition goals:', error);
    }
  };

  return (
    <div className="nutrition-goals">
      <h2 className="text-2xl font-bold mb-4">Nutrition Goals</h2>
      <form onSubmit={handleSubmit} className="goal-form">
        <label className="block mb-2">
          Calories:
          <input
            type="number"
            name="calories"
            value={goals.calories}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="block mb-2">
          Proteins (g):
          <input
            type="number"
            name="proteins"
            value={goals.proteins}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="block mb-2">
          Carbs (g):
          <input
            type="number"
            name="carbs"
            value={goals.carbs}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label className="block mb-2">
          Fats (g):
          <input
            type="number"
            name="fats"
            value={goals.fats}
            onChange={handleChange}
            className="input"
          />
        </label>
        <button type="submit" className="btn">
          Update Goals
        </button>
      </form>
    </div>
  );
};

export default NutritionGoals;
