import React from 'react';
import Sidebar from '../components/Sidebar';
import WorkoutPlans from '../components/WorkoutPlans';
import Header from '../components/Header';
import Footer from '../components/Footer';

const workouts = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <WorkoutPlans />
        <Footer />
      </div>
    </div>
  );
};

export default workouts;
