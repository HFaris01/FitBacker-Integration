import React from 'react';
import Image from 'next/image';

const RecipeCard = ({ recipe, onOpenModal }) => {
  return (
    <div className="recipe-card bg-white rounded-lg shadow-md p-4">
      <Image src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" width={400} height={160} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
        <button onClick={() => onOpenModal(recipe)} className="text-blue-500 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
