import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export const searchRecipes = async (query) => {
    const response = await api.get('/recipes/search', { params: { query } });
    return response.data;
};

export const getRecipeDetails = async (recipeId) => {
    const response = await api.get(`/recipes/${recipeId}`);
    return response.data;
};

export const likeRecipe = async (userId, recipeId) => {
    const response = await api.post('/recipes/like', { userId, recipeId });
    return response.data;
};

export const addMeal = async (userId, recipeId) => {
    const response = await api.post('/recipes/add-meal', { userId, recipeId });
    return response.data;
};

export const logFood = (foodData) => api.post('/api/nutrition/logFood', foodData);
export const getDailySummary = () => api.get('/api/nutrition/dailySummary');
export const getWeeklyNutrition = () => api.get('/api/nutrition/weeklySummary');
export const fetchNutritionGoals = () => api.get('/api/nutrition/goals');
export const updateNutritionGoals = (goals) => api.put('/api/nutrition/goals', goals);

export default api;
