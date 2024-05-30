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
    <div className="nutrition-goals bg-white-custom p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-4 text-black-custom">Nutrition Goals</h2>
      <form onSubmit={handleSubmit} className="goal-form">
        <label className="block mb-2 text-black-custom">
          Calories:
          <input
            type="number"
            name="calories"
            value={goals.calories}
            onChange={handleChange}
            className="input bg-gray-custom text-black-custom p-2 rounded mb-2"
          />
        </label>
        <label className="block mb-2 text-black-custom">
          Proteins (g):
          <input
            type="number"
            name="proteins"
            value={goals.proteins}
            onChange={handleChange}
            className="input bg-gray-custom text-black-custom p-2 rounded mb-2"
          />
        </label>
        <label className="block mb-2 text-black-custom">
          Carbs (g):
          <input
            type="number"
            name="carbs"
            value={goals.carbs}
            onChange={handleChange}
            className="input bg-gray-custom text-black-custom p-2 rounded mb-2"
          />
        </label>
        <label className="block mb-2 text-black-custom">
          Fats (g):
          <input
            type="number"
            name="fats"
            value={goals.fats}
            onChange={handleChange}
            className="input bg-gray-custom text-black-custom p-2 rounded mb-2"
          />
        </label>
        <button type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Update Goals
        </button>
      </form>
    </div>
  );
};

export default NutritionGoals;
