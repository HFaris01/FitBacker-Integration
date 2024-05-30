import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeSearchForm from '../components/RecipeSearchForm';
import RecipeCard from '../components/RecipeCard';
import RecipeDetailsModal from '../components/RecipeDetailsModal';
import FilterOptions from '../components/FilterOptions';
import api from '../services/api';

const RecipePage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [filters, setFilters] = useState({});
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [todayMeals, setTodayMeals] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchSearchResults = async (query = '', page = 1) => {
        setIsLoading(true);
        try {
            const queryString = buildQueryString(filters, query, page);
            console.log(`Fetching search results with query: ${queryString}`);
            const response = await api.get(`/recipes/search${queryString}`);
            setSearchResults(response.data.results || []);
            setTotalPages(response.data.totalPages);
            console.log('Fetched Data:', response.data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchRecipeDetails = async (recipeId) => {
        try {
            const response = await api.get(`/recipes/${recipeId}`);
            setSelectedRecipe(response.data);
            console.log('Recipe Details:', response.data);
        } catch (error) {
            console.error('Error fetching recipe details:', error);
        }
    };

    const handleRecipeSelect = (recipe) => {
        fetchRecipeDetails(recipe.id);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
    };

    const handleSearch = (query) => {
        setQuery(query);
        setPage(1);
    };

    useEffect(() => {
        fetchSearchResults(query, page);
    }, [filters, query, page]);

    const handleLike = (recipe) => {
        setLikedRecipes((prev) => (
            prev.some(r => r.id === recipe.id) ? prev.filter(r => r.id !== recipe.id) : [...prev, recipe]
        ));
    };

    const handleAddToMeal = (recipe) => {
        setTodayMeals((prev) => [...prev, recipe]);
    };

    const buildQueryString = (filters, query, page) => {
        let queryString = `?page=${page}&number=12`;
        if (query) queryString += `&query=${query}`;
        if (filters.lowCalories) queryString += `&maxCalories=500`;
        if (filters.highProtein) queryString += `&minProtein=20`;
        if (filters.lowCarbs) queryString += `&maxCarbs=50`;
        if (filters.lowFat) queryString += `&maxFat=15`;
        return queryString;
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="flex h-full bg-gray-100">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="recipe-page p-4">
                    <div className="search-section mb-6 flex flex-col md:flex-row justify-between items-center">
                        <RecipeSearchForm onSearch={handleSearch} />
                        <FilterOptions onFilter={handleFilterChange} fitnessPlan={null} />
                    </div>
                    <div className="search-results grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
                    <div className="flex justify-between items-center">
                        <button onClick={handlePreviousPage} disabled={page === 1} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Previous
                        </button>
                        <span className="text-black">Page {page} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={page === totalPages} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Next
                        </button>
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
