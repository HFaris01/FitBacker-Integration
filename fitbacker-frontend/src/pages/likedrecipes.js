import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import withAuth from '../components/withAuth';

const LikedRecipes = () => {
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    // Fetch liked recipes from local storage or backend API
    const fetchLikedRecipes = async () => {
      try {
        const response = await fetch('/api/likedrecipes'); // Update this URL to match your API
        const data = await response.json();
        setLikedRecipes(data);
      } catch (error) {
        console.error('Error fetching liked recipes:', error);
      }
    };

    fetchLikedRecipes();
  }, []);

  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>Liked Recipes</h1>
          {likedRecipes.length === 0 ? (
            <p className="text-black">You have no liked recipes yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {likedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default withAuth(LikedRecipes);
