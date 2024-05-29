import React from 'react';
import ExerciseLogger from '../components/ExerciseLogger';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withAuth from '../components/withAuth';

const ExercisesPage = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <ExerciseLogger />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default withAuth(ExercisesPage);
