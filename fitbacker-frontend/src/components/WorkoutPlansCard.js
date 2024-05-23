import React, { useState } from 'react';
import Image from 'next/image';

const WorkoutPlanCard = ({ title, image, exercises, benefits }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`workout-plan-card ${flipped ? 'flipped' : ''} bg-blueSec rounded-lg overflow-hidden`}
      onClick={flipCard}
    >
      <div className="front">
        <h2 className='text-white font-semibold'>{title}</h2>
        <Image src={image} alt={title} className="w-full" />
      </div>
      <div className="back bg-blueSec text-white rounded-lg p-4">
        <h2 className='text-white font-semibold mb-2'>Exercises</h2>
        <ul className="mb-4">
          {exercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
        <h2 className='text-white font-semibold mb-2'>Benefits</h2>
        <p>{benefits}</p>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
