import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodLogForm from '../components/FoodLogForm';
import NutritionSummary from '../components/NutritionSummary';
import NutritionTracking from '../components/NutritionTracking';
import NutritionGoals from '../components/NutritionGoals';
import WeeklyNutritionTracking from '../components/WeeklyNutritionTracking';
import RecipeDetailsModal from '../components/RecipeDetailsModal'; // Import the RecipeDetailsModal
import withAuth from '../components/withAuth';

const NutritionLoggerPage = () => {
  const [foodLog, setFoodLog] = useState([]);
  const [dailySummary, setDailySummary] = useState({
    calories: 0,
    proteins: 0,
    carbs: 0,
    fats: 0,
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  const handleAddToMeal = (nutrients) => {
    const foodData = {
      name: 'Recipe',
      calories: nutrients.calories,
      proteins: nutrients.proteins,
      carbs: nutrients.carbs,
      fats: nutrients.fats,
    };
    handleFoodLogged(foodData);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <div className="nutrition-logger-page">
          <h1 className="text-2xl text-black font-bold mb-4">Nutrition Logger</h1>
          <div className="form-section">
            <FoodLogForm onFoodLogged={handleFoodLogged} />
          </div>
          <div className="summary-section">
            <NutritionSummary dailySummary={dailySummary} />
          </div>
          <div className="tracking-section">
            <NutritionTracking foodLog={foodLog} />
          </div>
          <div className="weekly-tracking-section">
            <WeeklyNutritionTracking />
          </div>
          <div className="goals-section">
            <NutritionGoals />
          </div>
        </div>
        <Footer />
      </div>
      {selectedRecipe && (
        <RecipeDetailsModal
          recipe={selectedRecipe}
          user={user}
          onCloseModal={() => setSelectedRecipe(null)}
          onLike={(likedRecipe) => console.log('Liked:', likedRecipe)} // Placeholder function for liking a recipe
          onAddToMeal={handleAddToMeal}
        />
      )}
    </div>
  );
};

export default withAuth(NutritionLoggerPage);
