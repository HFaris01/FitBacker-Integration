import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodLogForm from '../components/FoodLogForm';
import NutritionSummary from '../components/NutritionSummary';
import NutritionTracking from '../components/NutritionTracking';
import NutritionGoals from '../components/NutritionGoals';
import WeeklyNutritionTracking from '../components/WeeklyNutritionTracking';
import withAuth from '../components/withAuth';

const NutritionLoggerPage = () => {
  const [foodLog, setFoodLog] = useState([]);
  const [dailySummary, setDailySummary] = useState({
    calories: 0,
    proteins: 0,
    carbs: 0,
    fats: 0,
  });

  useEffect(() => {
    // Initialize empty data structures if necessary
    setFoodLog([]);
    setDailySummary({
      calories: 0,
      proteins: 0,
      carbs: 0,
      fats: 0,
    });
  }, []);

  const handleFoodLogged = (foodData) => {
    setFoodLog((prevFoodLog) => {
      const newFoodLog = [...prevFoodLog, foodData];
      return newFoodLog;
    });
    setDailySummary((prevSummary) => ({
      calories: prevSummary.calories + foodData.calories,
      proteins: prevSummary.proteins + foodData.proteins,
      carbs: prevSummary.carbs + foodData.carbs,
      fats: prevSummary.fats + foodData.fats,
    }));
  };

  return (
    <div className="flex h-full bg-gray-custom text-black-custom">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Nutrition Logger</h1>
          <FoodLogForm onFoodLogged={handleFoodLogged} />
          <NutritionSummary dailySummary={dailySummary} />
          <NutritionTracking foodLog={foodLog} />
          <WeeklyNutritionTracking />
          <NutritionGoals />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default withAuth(NutritionLoggerPage);
