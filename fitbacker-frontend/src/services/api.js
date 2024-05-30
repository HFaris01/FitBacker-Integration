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
    return api.post('/recipes/like', { userId, recipeId });
  };
  
  export const addMeal = async (userId, recipeId) => {
    return api.post('/recipes/addMeal', { userId, recipeId });
  };
  
  export const getRecipeNutrients = async (recipeId) => {
    const response = await api.get(`/recipes/nutrients/${recipeId}`);
    return response.data;
  };

export const logFood = async (foodData) => {
    const response = await api.post('/nutrition/logFood', foodData);
    return response.data;
  };
  
  export const fetchNutritionGoals = async () => {
    const response = await api.get('/nutrition/goals');
    return response.data;
  };
  
  export const updateNutritionGoals = async (goals) => {
    const response = await api.put('/nutrition/goals', goals);
    return response.data;
  };
  
  export const getWeeklyNutrition = async () => {
    const response = await api.get('/nutrition/weeklySummary');
    return response.data;
  };

export default api;
