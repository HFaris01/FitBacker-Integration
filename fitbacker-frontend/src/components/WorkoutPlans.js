import React from 'react';
import WorkoutPlansCard from '../components/WorkoutPlansCard';

const WorkoutPlans = () => {
  const workoutPlans = [
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Strength Training',
      image: 'https://via.placeholder.com/200',
      exercises: ['Squats', 'Deadlifts', 'Bench Press'],
      benefits: 'Builds muscle strength and mass.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
    {
      title: 'Cardio Workout',
      image: 'https://via.placeholder.com/200',
      exercises: ['Running', 'Cycling', 'Jumping Jacks'],
      benefits: 'Improves cardiovascular health and endurance.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {workoutPlans.map((plan, index) => (
        <WorkoutPlansCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default WorkoutPlans;
