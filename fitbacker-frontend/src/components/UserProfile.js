import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
  
  const userData = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    age: 30,
    gender: 'Male',
    height: '180 cm',
    weight: '85 kg',
    fitnessGoals: ['Weight loss', 'Muscle gain'],
    workoutHistory: [
      { date: '2024-03-15', duration: '1 hour', type: 'Strength Training' },
      { date: '2024-03-14', duration: '45 mins', type: 'Cardio' },
      
    ],
    nutrition: {
      dailyCalories: 2000,
      carbs: '200 g',
      protein: '100 g',
      fat: '50 g',
      
    },
    progress: {
      weightLoss: 5, 
      muscleGain: 2, 
      
    },
    achievements: [
      { title: 'Marathon Runner', description: 'Completed a full marathon', image: 'https://via.placeholder.com/150' },
      { title: 'Ironman', description: 'Completed an Ironman triathlon', image: 'https://via.placeholder.com/150' },
      
    ],
    
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center mt-5 mb-8">
        <Image src={userData.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h2 className="text-3xl font-bold text-black">{userData.name}</h2>
          <p className="text-gray-600">{userData.age} years old, {userData.gender}</p>
          <p className="text-gray-600">Height: {userData.height}, Weight: {userData.weight}</p>
          <p className="mt-2 text-black">
            Fitness Goals:
            {userData.fitnessGoals.map((goal, index) => (
              <span key={index} className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded">
                {goal}
              </span>
            ))}
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-4">Workout History</h3>
        <ul className="divide-y divide-gray-200">
          {userData.workoutHistory.map((workout, index) => (
            <li key={index} className="py-4">
              <p className="text-lg font-semibold text-black">{workout.type}</p>
              <p className="text-gray-600">{workout.date} | {workout.duration}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-4">Nutrition Tracking</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-black">Daily Calories</p>
            <p className="text-gray-600">{userData.nutrition.dailyCalories} kcal</p>
          </div>
          <div>
            <p className="font-semibold text-black">Carbs</p>
            <p className="text-gray-600">{userData.nutrition.carbs}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Protein</p>
            <p className="text-gray-600">{userData.nutrition.protein}</p>
          </div>
          <div>
            <p className="font-semibold text-black">Fat</p>
            <p className="text-gray-600">{userData.nutrition.fat}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-4">Progress</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-black">Weight Loss</p>
            <p className="text-gray-600">{userData.progress.weightLoss} kg</p>
          </div>
          <div>
            <p className="font-semibold text-black">Muscle Gain</p>
            <p className="text-gray-600">{userData.progress.muscleGain} kg</p>
          </div>
        </div>
      </section>

      <section className='mt-10 mb-4'>
        <h3 className="text-2xl font-bold text-black mb-4">Achievements</h3>
        <div className="flex flex-wrap">
          {userData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center mr-6 mb-6">
              <Image src={achievement.image} alt={achievement.title} className="w-24 h-24 rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold text-black">{achievement.title}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
