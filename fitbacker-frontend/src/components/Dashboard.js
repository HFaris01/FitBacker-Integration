import React from 'react';
const Dashboard = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <div className="flex-1">
        <div className="p-6 space-y-6">
          <section className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to FitBacker!</h1>
            <p className="mt-4 text-lg text-gray-700">Your ultimate tool for managing recipes and tracking your nutrition.</p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold text-blue-600">Recipe Search</h2>
              <p className="mt-2 text-gray-700">Find delicious recipes tailored to your dietary needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold text-blue-600">Nutrition Logger</h2>
              <p className="mt-2 text-gray-700">Keep track of your daily intake of calories, proteins, carbs, and fats.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold text-blue-600">Personalized Goals</h2>
              <p className="mt-2 text-gray-700">Set and track your nutrition goals to stay on target.</p>
            </div>
          </section>
          <section className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600">Get Started Today!</h2>
            <p className="mt-4 text-lg text-gray-700">Sign up now and take control of your nutrition and fitness journey.</p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up Now
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
