import React from 'react';
import Image from 'next/image';

const RecipeCard = ({ recipe, onOpenModal }) => {
  return (
    <div className="relative recipe-card bg-white rounded-lg shadow-md overflow-hidden group">
      <Image src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" width={400} height={160} />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-2 text-white text-center">
        <h3 className="text-lg font-bold">{recipe.title}</h3>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
        <button
          onClick={() => onOpenModal(recipe)}
          className="relative z-10 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
