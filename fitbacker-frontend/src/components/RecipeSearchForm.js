import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const RecipeSearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="recipe-search-form">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
                style={{ color: 'black' }}
                className="search-input"
            />
            <button type="submit" className="search-button">
                <FiSearch />
            </button>
        </form>
    );
};

export default RecipeSearchForm;
