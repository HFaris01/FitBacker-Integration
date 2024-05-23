import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Image from 'next/image';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch('/api/dashboard'); // Fetch data from the API endpoint
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="flex-1 p-6 overflow-hidden">
      <section className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className='font-bold hover:cursor-default text-2xl mb-5 text-black'> Calories you burned while exercising this week </h1>
          {isClient && (
            <LineChart width={400} height={300} data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Calories" stroke="#8884d8" />
            </LineChart>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl hover:cursor-default font-bold text-black mb-2">You should try this exercise!</h1>
          <div className="flex items-center">
            <Image src="https://via.placeholder.com/400" alt="Fitness Widget" className="mr-4" />
            <div>
              <p className="text-black">Exercise: Push-ups</p>
              <p className="text-black">Description: Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up to the starting position.</p>
              <p className="text-black">Muscles worked: Chest, shoulders, triceps, core</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl hover:cursor-default font-bold text-black mb-4">Recent Workouts</h2>
        <ul className="space-y-4">
          <li className="flex items-center text-black">
            <Image
              src="https://via.placeholder.com/30"
              alt="Workout Icon"
              className="mr-2"
            />
            - Strength Training
          </li>
          <li className="flex items-center text-black">
            <Image
              src="https://via.placeholder.com/30"
              alt="Workout Icon"
              className="mr-2"
            />
            - Cardio Session
          </li>
          <li className="flex items-center text-black">
            <Image
              src="https://via.placeholder.com/30"
              alt="Workout Icon"
              className="mr-2"
            />
            - Endurance Training
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
