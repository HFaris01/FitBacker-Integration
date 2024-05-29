import React, { useEffect, useState } from 'react';
import { getWeeklyNutrition } from '../services/api';

const WeeklyNutritionTracking = () => {
  const [weeklyNutrition, setWeeklyNutrition] = useState([]);

  useEffect(() => {
    const fetchWeeklyNutrition = async () => {
      try {
        const data = await getWeeklyNutrition();
        setWeeklyNutrition(data || []); // Ensure it's always an array
      } catch (error) {
        console.error('Error fetching weekly nutrition:', error);
        setWeeklyNutrition([]); // Ensure it's always an array in case of error
      }
    };

    fetchWeeklyNutrition();
  }, []);

  return (
    <div className="weekly-nutrition-tracking">
      <h2 className="text-2xl font-bold mb-4">Weekly Nutrition Tracking</h2>
      {weeklyNutrition.length === 0 ? (
        <p>No nutrition data available for this week.</p>
      ) : (
        <ul>
          {weeklyNutrition.map((day) => (
            <li key={day._id}>
              <strong>{day._id}:</strong> {day.calories} kcal, {day.proteins} g proteins, {day.carbs} g carbs, {day.fats} g fats
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeeklyNutritionTracking;
