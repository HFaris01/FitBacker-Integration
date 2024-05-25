import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseForm from './ExerciseForm';

const ExerciseLogger = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('/api/exercises');
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises', error);
    }
  };

  const handleExerciseAdded = (newExercise) => {
    setExercises([newExercise, ...exercises]);
  };

  const handleDeleteExercise = async (id) => {
    try {
      await axios.delete(`/api/exercises/${id}`);
      setExercises(exercises.filter((exercise) => exercise._id !== id));
    } catch (error) {
      console.error('Error deleting exercise', error);
    }
  };

  return (
    <div className="exercise-logger">
      <h2>Exercise Logger</h2>
      <ExerciseForm onExerciseAdded={handleExerciseAdded} />
      <div className="exercise-list">
        {exercises.map((exercise) => (
          <div key={exercise._id} className="exercise-item">
            <p>{exercise.name}</p>
            {exercise.duration && <p>Duration: {exercise.duration} minutes</p>}
            {exercise.reps && <p>Reps: {exercise.reps}</p>}
            {exercise.series && <p>Series: {exercise.series}</p>}
            <button onClick={() => handleDeleteExercise(exercise._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLogger;
