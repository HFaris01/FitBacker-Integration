import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Image from 'next/image';
import axios from 'axios';
import WeeklyNutritionGraph from './WeeklyNutritionGraph';

const Dashboard = () => {
  const [caloriesData, setCaloriesData] = useState([]);
  const [recentExercises, setRecentExercises] = useState([]);
  const [suggestedExercise, setSuggestedExercise] = useState({});
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedNutrient, setSelectedNutrient] = useState('calories');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCaloriesData(response.data.caloriesData);
        setRecentExercises(response.data.recentExercises);
        setSuggestedExercise(response.data.suggestedExercise);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchUserData();
    fetchDashboardData();
  }, []);

  return (
    <div className="flex-1 p-6 overflow-hidden">
      <section className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className='font-bold hover:cursor-default text-2xl mb-5 text-black'>Weekly Nutrition Graph</h1>
          <div className="mb-4">
            <label className="mr-2">Select Nutrient:</label>
            <select
              value={selectedNutrient}
              onChange={(e) => setSelectedNutrient(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="calories">Calories</option>
              <option value="proteins">Proteins</option>
              <option value="carbs">Carbs</option>
              <option value="fats">Fats</option>
            </select>
          </div>
          {isClient && (
            <WeeklyNutritionGraph selectedNutrient={selectedNutrient} />
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl hover:cursor-default font-bold text-black mb-2">You should try this exercise!</h1>
          <div className="flex items-center">
            <Image src={suggestedExercise.image || 'https://via.placeholder.com/400'} alt="Fitness Widget" className="mr-4" width={100} height={100} />
            <div>
              <p className="text-black">Exercise: {suggestedExercise.name || 'Push-ups'}</p>
              <p className="text-black">Description: {suggestedExercise.description || 'Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up to the starting position.'}</p>
              <p className="text-black">Muscles worked: {suggestedExercise.muscles || 'Chest, shoulders, triceps, core'}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl hover:cursor-default font-bold text-black mb-4">Recent Workouts</h2>
        {recentExercises.length > 0 ? (
          <ul className="space-y-4">
            {recentExercises.map((exercise, index) => (
              <li key={index} className="flex items-center text-black">
                <Image
                  src={exercise.image || 'https://via.placeholder.com/30'}
                  alt="Workout Icon"
                  className="mr-2"
                  width={30}
                  height={30}
                />
                - {exercise.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black">No recent workouts. Start logging your exercises to track your progress!</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
