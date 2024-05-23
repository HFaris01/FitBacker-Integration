import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NutritionTracking from '../components/NutritionTracking';

const NutritionLoggerPage = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [loggedFoods, setLoggedFoods] = useState([]);
  const [nutritionSummary, setNutritionSummary] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const handleAddFood = () => {
    const newFood = {
      foodName,
      calories: parseInt(calories),
      protein: parseInt(protein),
      carbs: parseInt(carbs),
      fat: parseInt(fat),
    };
    setLoggedFoods([...loggedFoods, newFood]);
    setNutritionSummary((prevSummary) => ({
      calories: prevSummary.calories + newFood.calories,
      protein: prevSummary.protein + newFood.protein,
      carbs: prevSummary.carbs + newFood.carbs,
      fat: prevSummary.fat + newFood.fat,
    }));
    setFoodName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
  };

  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="nutrition-logger-page p-4">
          <div className="form-section mb-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>Log Your Food</h2>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="Food Name"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              style={{ color: 'black' }}
            />
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              style={{ color: 'black' }}
            />
            <input
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              placeholder="Protein (g)"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              style={{ color: 'black' }}
            />
            <input
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              placeholder="Carbs (g)"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              style={{ color: 'black' }}
            />
            <input
              type="number"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              placeholder="Fat (g)"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              style={{ color: 'black' }}
            />
            <button 
              onClick={handleAddFood} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
          <NutritionTracking loggedFoods={loggedFoods} nutritionSummary={nutritionSummary} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default NutritionLoggerPage;
