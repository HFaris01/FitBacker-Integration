import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getWeeklyNutrition } from '../services/api';

const WeeklyNutritionGraph = ({ selectedNutrient }) => {
  const [weeklyNutrition, setWeeklyNutrition] = useState([]);

  useEffect(() => {
    const fetchWeeklyNutrition = async () => {
      try {
        const data = await getWeeklyNutrition();
        setWeeklyNutrition(data);
      } catch (error) {
        console.error('Error fetching weekly nutrition:', error);
      }
    };

    fetchWeeklyNutrition();
  }, []);

  const data = weeklyNutrition.map((day) => ({
    date: day._id,
    value: day[selectedNutrient],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeeklyNutritionGraph;
