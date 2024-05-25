import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/recipes/search`, {
        params: { query }
      });
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default RecipeSearchForm;
