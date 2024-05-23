import React from 'react';
import Image from 'next/image';

const RecipeCard = ({ recipe, onOpenModal }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image" onClick={() => onOpenModal(recipe)}>
        <Image src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-details">
        <h3 className="recipe-title" style={{ color: 'black' }}>{recipe.title}</h3>
        <p className="recipe-meta" style={{ color: 'black' }}>{recipe.readyInMinutes} mins | {recipe.veryPopular ? 'Popular' : ''}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
