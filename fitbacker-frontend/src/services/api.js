import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleApiError = (error, defaultMessage) => {
  console.error(defaultMessage, error.response ? error.response.data : error.message);
  throw error.response ? error.response.data : new Error(defaultMessage);
};

// Spoonacular API base URL and key
const spoonacularApi = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Registration failed');
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Login failed');
  }
};

export const fetchUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch user');
  }
};

export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verifyToken');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Token verification failed');
  }
};

export const fetchDashboardData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch dashboard data');
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await spoonacularApi.get('/recipes/complexSearch', {
      params: {
        query,
        addRecipeInformation: true,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes from Spoonacular:', error);
    throw error;
  }
};

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await spoonacularApi.get(`/recipes/${recipeId}/information`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details from Spoonacular:', error);
    throw error;
  }
};

export const likeRecipe = async (userId, recipeId) => {
  try {
    const response = await api.post(`/users/${userId}/likedRecipes/${recipeId}`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Error liking recipe');
  }
};

export const addMeal = async (userId, recipeId) => {
  try {
    const response = await api.post(`/users/${userId}/meals/${recipeId}`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Error adding meal');
  }
};

export const fetchNutritionGoals = async () => {
  try {
    const response = await api.get('/nutrition/goals');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch nutrition goals');
  }
};

export const updateNutritionGoals = async (goals) => {
  try {
    const response = await api.put('/nutrition/goals', goals);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to update nutrition goals');
  }
};

export const getWeeklyNutrition = async () => {
  try {
    const response = await api.get('/nutrition/weekly');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch weekly nutrition data');
  }
};

export const logFood = async (foodData) => {
  try {
    const response = await api.post('/foods/log', foodData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Error logging food');
  }
};

export const addExercise = async (exerciseData) => {
  try {
    const response = await api.post('/exercises', exerciseData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Error adding exercise');
  }
};

export const getAllExercises = async () => {
  try {
    const response = await api.get('/exercises');
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch exercises');
  }
};

export const deleteExercise = async (exerciseId) => {
  try {
    const response = await api.delete(`/exercises/${exerciseId}`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Error deleting exercise');
  }
};
