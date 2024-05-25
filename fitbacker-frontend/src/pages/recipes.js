import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeSearchForm from '../components/RecipeSearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeDetailsModal from '../components/RecipeDetailsModal';
import FilterOptions from '../components/FilterOptions';

const RecipePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [todayMeals, setTodayMeals] = useState([]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/recipes/search?query=');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
      console.log('Fetched Data:', data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const fetchRecipeDetails = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipes/${recipeId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSelectedRecipe(data);
      console.log('Recipe Details:', data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const handleRecipeSelect = (recipe) => {
    fetchRecipeDetails(recipe.id);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [filters]);

  const handleLike = (recipe) => {
    setLikedRecipes((prev) => (
      prev.some(r => r.id === recipe.id) ? prev.filter(r => r.id !== recipe.id) : [...prev, recipe]
    ));
  };

  const handleAddToMeal = (recipe) => {
    setTodayMeals((prev) => [...prev, recipe]);
  };

  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="recipe-page p-4">
          <div className="search-section mb-6">
            <RecipeSearchForm onSearch={fetchSearchResults} />
            <FilterOptions filters={filters} onChange={handleFilterChange} />
          </div>
          <div className="search-results grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              searchResults.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onOpenModal={handleRecipeSelect}
                  isLiked={likedRecipes.some(r => r.id === recipe.id)}
                  onLike={() => handleLike(recipe)}
                />
              ))
            )}
          </div>
          <RecipeDetailsModal
            recipe={selectedRecipe}
            onCloseModal={() => setSelectedRecipe(null)}
            onLike={() => handleLike(selectedRecipe)}
            onAddToMeal={() => handleAddToMeal(selectedRecipe)}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RecipePage;
