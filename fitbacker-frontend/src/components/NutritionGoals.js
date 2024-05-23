import React from 'react';

const NutritionGoals = ({ goals, setGoals }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoals((prevGoals) => ({ ...prevGoals, [name]: value }));
  };

  return (
    <div className="nutrition-goals">
      <h2 style={{ color: 'black' }}>Nutrition Goals</h2>
      <div>
        <label style={{ color: 'black' }}>Calories</label>
        <input
          type="number"
          name="calories"
          value={goals.calories}
          onChange={handleChange}
          style={{ color: 'black' }}
        />
      </div>
      <div>
        <label style={{ color: 'black' }}>Protein (g)</label>
        <input
          type="number"
          name="protein"
          value={goals.protein}
          onChange={handleChange}
          style={{ color: 'black' }}
        />
      </div>
      <div>
        <label style={{ color: 'black' }}>Carbs (g)</label>
        <input
          type="number"
          name="carbs"
          value={goals.carbs}
          onChange={handleChange}
          style={{ color: 'black' }}
        />
      </div>
      <div>
        <label style={{ color: 'black' }}>Fat (g)</label>
        <input
          type="number"
          name="fat"
          value={goals.fat}
          onChange={handleChange}
          style={{ color: 'black' }}
        />
      </div>
    </div>
  );
};

export default NutritionGoals;
