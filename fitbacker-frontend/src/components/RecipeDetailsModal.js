import React from 'react';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { likeRecipe, addMeal } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeDetailsModal = ({ recipe, onCloseModal, onLike, onAddToMeal }) => {
  const { user } = useAuth();

  const handleLike = async () => {
    try {
      await likeRecipe(user._id, recipe.id);
      onLike(recipe);
    } catch (error) {
      console.error('Error liking recipe:', error);
    }
  };

  const handleAddToMeal = async () => {
    try {
      await addMeal(user._id, recipe.id);
      onAddToMeal(recipe);
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  };

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <Image src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-4" width={400} height={240} />
        <p className="mb-2"><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
        <p className="mb-2"><strong>Servings:</strong> {recipe.servings}</p>
        <p className="mb-4"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <p className="mb-4"><strong>Instructions:</strong> {recipe.instructions.join(' ')}</p>
        <div className="flex justify-between items-center">
          <button onClick={handleLike} className="text-red-500">
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </button>
          <button onClick={handleAddToMeal} className="text-green-500">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
          </button>
          <button onClick={onCloseModal} className="text-gray-500">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsModal;
