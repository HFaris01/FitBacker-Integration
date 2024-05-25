import React, { useState } from 'react';
import axios from 'axios';

const ExerciseForm = ({ onExerciseAdded }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [reps, setReps] = useState('');
  const [series, setSeries] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/exercises', {
        name,
        duration: duration || undefined,
        reps: reps || undefined,
        series: series || undefined,
      });
      onExerciseAdded(response.data);
      setName('');
      setDuration('');
      setReps('');
      setSeries('');
    } catch (error) {
      console.error('Error adding exercise', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="exercise-form">
      <div>
        <label>Exercise Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div>
        <label>Reps:</label>
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      </div>
      <div>
        <label>Series:</label>
        <input type="number" value={series} onChange={(e) => setSeries(e.target.value)} />
      </div>
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
