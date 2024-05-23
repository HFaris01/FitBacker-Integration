import React from 'react';
import { RiKnifeFill } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const RecipeDetailsModal = ({ recipe = null, onCloseModal, onLike, onAddToMeal }) => {
  if (!recipe) {
    return null;
  }

  return (
    <div className="recipe-details-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg relative max-w-3xl w-full overflow-auto max-h-full">
        <button className="close-button absolute top-4 right-4" onClick={onCloseModal} title="Close">
          <FaTimes style={{ color: 'black', fontSize: '1.5em' }} />
        </button>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>{recipe.title}</h2>
        <Image src={recipe.image} alt={recipe.title} className="w-full rounded mb-4" />
        <div className="mb-4 flex justify-center">
          <button 
            className="like-button bg-orangeQuart px-6 py-2 rounded hover:bg-greenPrim" 
            onClick={onLike} 
            title="Like"
          >
            <RiKnifeFill style={{ color: 'black', fontSize: '1.5em' }} />
          </button>
        </div>
        <p style={{ color: 'black' }}>Ready in {recipe.readyInMinutes} minutes</p>
        <p style={{ color: 'black' }}>Servings: {recipe.servings}</p>
        <h3 className="mt-4 mb-2 text-xl font-semibold" style={{ color: 'black' }}>Ingredients:</h3>
        <ul className="list-disc list-inside">
          {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index} style={{ color: 'black' }}>{ingredient.original}</li>
          ))}
        </ul>
        <h3 className="mt-4 mb-2 text-xl font-semibold" style={{ color: 'black' }}>Instructions:</h3>
        <ol className="list-decimal list-inside">
          {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 ? (
            recipe.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index} style={{ color: 'black' }}>{step.step}</li>
            ))
          ) : (
            <p style={{ color: 'black' }}>No instructions available&apos;</p>
          )}
        </ol>
        <button 
          className="add-to-meal-button mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          onClick={onAddToMeal}
        >
           Add to Today&apos;s Meal
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailsModal;
