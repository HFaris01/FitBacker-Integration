import React, { useState } from 'react';
import { searchRecipes } from '../services/api';

const RecipeSearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchRecipes(query);
      onSearch(results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
        className="border p-2 rounded w-full"
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default RecipeSearchForm;
