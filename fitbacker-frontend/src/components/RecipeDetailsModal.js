import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { likeRecipe, addMeal, getRecipeNutrients } from '../services/api';

const RecipeDetailsModal = ({ recipe, user, onCloseModal, onLike, onAddToMeal }) => {
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
      const nutrients = await getRecipeNutrients(recipe.id);
      await addMeal(user._id, recipe.id);
      onAddToMeal(nutrients);
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  };

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto max-h-full relative">
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">{recipe.title}</h2>
        <Image src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-4" width={400} height={240} />
        <p className="mb-2 text-black"><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
        <p className="mb-2 text-black"><strong>Servings:</strong> {recipe.servings}</p>
        <p className="mb-4 text-black"><strong>Ingredients:</strong> {recipe.extendedIngredients.map(ingredient => ingredient.original).join(', ')}</p>
        <p className="mb-4 text-black"><strong>Instructions:</strong> <span dangerouslySetInnerHTML={{ __html: recipe.instructions }} /></p>
        <div className="flex justify-between items-center">
          <button onClick={handleLike} className="text-red-500">
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </button>
          <button onClick={handleAddToMeal} className="text-green-500">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsModal;
