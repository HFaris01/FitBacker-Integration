import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import withAuth from '../components/withAuth';

const SetGoals = () => {
  const [goals, setGoals] = useState({
    loseWeight: false,
    gainMuscle: false,
    improveHealth: false,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setGoals((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming user ID is stored in localStorage after registration
    const userId = localStorage.getItem('userId');
    try {
      await axios.post(`/api/users/${userId}/goals`, goals);
      // Redirect to the dashboard after setting goals
      router.push('/dashboard');
    } catch (error) {
      console.error('Error setting goals', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Set Your Goals</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Lose Weight</label>
            <input
              type="checkbox"
              name="loseWeight"
              checked={goals.loseWeight}
              onChange={handleChange}
              className="form-checkbox h-5 w-5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gain Muscle</label>
            <input
              type="checkbox"
              name="gainMuscle"
              checked={goals.gainMuscle}
              onChange={handleChange}
              className="form-checkbox h-5 w-5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Improve Health</label>
            <input
              type="checkbox"
              name="improveHealth"
              checked={goals.improveHealth}
              onChange={handleChange}
              className="form-checkbox h-5 w-5"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Save Goals
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(SetGoals);
